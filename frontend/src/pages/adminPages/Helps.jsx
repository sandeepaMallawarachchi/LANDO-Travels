import React from "react";

const Helps = () => {
  return (
    <div className="p-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard Help</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          <strong>Overview:</strong> The admin dashboard is your central hub for
          managing the blog. It allows you to update content, manage users, and
          configure site settings to ensure everything runs smoothly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Navigating the Dashboard
        </h2>
        <p>
          <strong>Menu Overview:</strong> The main sections of the dashboard
          include "Dasboard," "Inbox," "Users," "Blogs," " Documentations," and
          "Help"
        </p>
        <p>
          <strong>Quick Access Tips:</strong> Use Dashboard shortcuts or menu
          navigation for quicker access to different sections of the dashboard.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Managing Blog Posts</h2>
        <p>
          <strong>Editing Posts:</strong> Learn how to edit existing posts,
          click on the "edit" button on the card update content, update photos
          by URLs .
        </p>
        <p>
          <strong>Creating a New Post:</strong>In the Airline News section,
          there are 5 cards, as we believe this number is sufficient. These
          cards can be updated as the news changes. If you want to add another
          space/card for news contact developers
        </p>

        <p>
          <strong>Deleting Posts:</strong> It's also doesn't appers in case for
          the blog's content view,If you would like this feature, please contact
          the developers. They can create the functionality on the dashboard for
          your convenience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Managing Media</h2>
        <p>
          <strong>Uploading Media:</strong> Just click on "save" that will
          update
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. User Management</h2>
        <p>
          <strong>Adding New Users:</strong> Its eacy to add a new Admin by
          filling the form, we have provided you that the document with the link
          only admin can login
        </p>
        <p>
          <strong>Editing User Profiles:</strong> How to update user information
          and change passwords.
        </p>
        <p>
          <strong>Managing User Permissions:</strong> Overview of different user
          roles (Admin, Editor, Author, etc.) and and in this web site one
          person acts all the roles .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. Settings and Configuration
        </h2>
        <p>
          <strong>General Settings:</strong> Overview of site title, tagline,
          and basic settings.
        </p>
        <p>
          <strong>SEO Settings:</strong> Tips on optimizing blog posts for
          search engines.
        </p>
        <p>
          <strong>Theme Customization:</strong> Guide on customizing the blog's
          appearance using themes and templates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Security Tips</h2>
        <p>
          <strong>Best Practices:</strong> Tips on keeping the site secure, such
          as using strong passwords, keeping software up to date, and managing
          user permissions wisely. keep the connectoions with the developers.
        </p>
        <p>
          <strong>Backup Procedures:</strong> Instructions on how to back up the
          site regularly to prevent data loss.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Troubleshooting</h2>
        <p>
          <strong>Common Issues:</strong> List of common issues and their
          solutions (e.g., "What to do if a post doesn't publish," "How to
          recover deleted posts").
        </p>
        <p>
          <strong>Contact Support:</strong> Get further help through
          documentation, forums, or direct support channels. You can also{" "}
          <a
            href="mailto:thisalabmsz@gmail.com,sandeepaabmsz@gmail.com"
            style={{
              color: "#007bff", // Bright blue color
              fontWeight: "bold", // Bold text
              textDecoration: "underline", // Underlined text
              fontSize: "1.1em", // Slightly larger font size
            }}
          >
            email our developers
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Helps;
