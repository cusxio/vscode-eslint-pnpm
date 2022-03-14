/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  plugins: ["@nrwl/nx"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@nrwl/nx/typescript"],
    },
    {
      files: ["*.js", "*.jsx"],
      extends: ["plugin:@nrwl/nx/javascript"],
    },
  ],
};
