const express = require("express");
const nodemailer = require("nodemailer");
const PdfPrinter = require("pdfmake");
const fs = require("fs");

const fonts = {
    Helvetica: {
        normal: "Helvetica",
        bold: "Helvetica-Bold",
    },
};

const printer = new PdfPrinter(fonts);

exports.sendFlightRequest = async (req, res) => {
    try {
        const {
            origin,
            destination,
            depart,
            returnDate,
            travelClass,
            adults,
            children,
            infants,
            name,
            email,
            phone,
            address,
            decription,
            tripType,
        } = req.body;

        const logoDataUrl = req.body.logoBase64;

        const docDefinition = {
            content: [
                {
                    columns: [
                        {
                            image: logoDataUrl,
                            width: 80,
                        },
                        {
                            text: "Flight Request Summary",
                            alignment: "right",
                            fontSize: 20,
                            bold: true,
                            margin: [0, 10, 0, 0],
                        },
                    ],
                },
                {
                    canvas: [
                        { type: "line", x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 1, lineColor: "#E5E7EB" },
                    ],
                    margin: [0, 10, 0, 10],
                },
                { text: "\nFlight Details", style: "sectionHeader", fontSize: 14, bold: true },

                ...(tripType === "Multi City"
                    ? [
                        {
                            style: "tableStyle",
                            table: {
                                headerRows: 1,
                                widths: ["30%", "30%", "40%"],
                                body: [
                                    [
                                        { text: "Origin", bold: true },
                                        { text: "Destination", bold: true },
                                        { text: "Departure Date", bold: true }
                                    ],
                                    ...req.body.multiCityFlights.map((flight) => [
                                        flight.origin || "—",
                                        flight.destination || "—",
                                        flight.depart || "—"
                                    ])
                                ],
                            },
                            layout: "noBorders",
                        },
                        {
                            style: "tableStyle",
                            table: {
                                widths: ["35%", "65%"],
                                body: [
                                    [{ text: "Travel Class", bold: true }, travelClass],
                                    [{ text: "Travellers", bold: true }, `${adults} Adult(s), ${children} Child, ${infants} Infant`],
                                    [{ text: "Additional Details", bold: true }, decription || "—"],
                                ],
                            },
                            layout: "noBorders",
                            margin: [0, 10, 0, 0],
                        }
                    ]
                    : [
                        {
                            style: "tableStyle",
                            table: {
                                widths: ["35%", "65%"],
                                body: [
                                    [{ text: "Origin", bold: true }, origin],
                                    [{ text: "Destination", bold: true }, destination],
                                    [{ text: "Departure Date", bold: true }, depart],
                                    ...(tripType === "Round Trip" ? [[{ text: "Return Date", bold: true }, returnDate]] : []),
                                    [{ text: "Travel Class", bold: true }, travelClass],
                                    [{ text: "Travellers", bold: true }, `${adults} Adult(s), ${children} Child, ${infants} Infant`],
                                    [{ text: "Additional Details", bold: true }, decription || "—"],
                                ],
                            },
                            layout: "noBorders",
                        }
                    ]
                ),
                { text: "\nPersonal Details", style: "sectionHeader", fontSize: 14, bold: true },
                {
                    style: "tableStyle",
                    table: {
                        widths: ["35%", "65%"],
                        body: [
                            [{ text: "Full Name", bold: true }, name],
                            [{ text: "Email", bold: true }, email],
                            [{ text: "Phone", bold: true }, phone],
                            [{ text: "Address", bold: true }, address],
                        ],
                    },
                    layout: "noBorders",
                },
                {
                    text: "\nThank you for submitting your request!",
                    alignment: "center",
                    margin: [0, 30, 0, 0],
                    color: "#6B7280",
                },
            ],
            styles: {
                tableStyle: {
                    margin: [0, 5, 0, 0],
                    fontSize: 10.5,
                },
            },
            defaultStyle: {
                font: "Helvetica",
            },
        };

        const pdfDoc = printer.createPdfKitDocument(docDefinition);
        let chunks = [];

        pdfDoc.on("data", (chunk) => chunks.push(chunk));
        pdfDoc.on("end", async () => {
            const pdfBuffer = Buffer.concat(chunks);

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.sendMail({
                from: `"${name}" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_USER,
                replyTo: email,
                subject: "Flight Request Summary",
                text: `Attached is the PDF summary of ${name}'s flight request.`,
                attachments: [
                    {
                        filename: "Flight_Request.pdf",
                        content: pdfBuffer,
                    },
                ],
            });
            res.json({ success: true });
        });

        pdfDoc.end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Failed to send email" });
    }
};