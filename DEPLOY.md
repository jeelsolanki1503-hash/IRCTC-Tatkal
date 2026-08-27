# Deploy to GitHub Pages

1. Copy the contents of this `Code/` folder into the root of a GitHub repository.
2. Commit and push those files, including `.nojekyll`.
3. In GitHub, open **Settings → Pages**.
4. Set source to **Deploy from a branch**, select the default branch and **/ (root)** folder.
5. Visit `https://<username>.github.io/<repository>/#/home` after publishing.

The application uses hash routes, relative file paths, and no build process, so it works from a GitHub project-site subpath.
