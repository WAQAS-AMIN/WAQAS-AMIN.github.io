#!/usr/bin/env sh
# Build and publish dist/ to the gh-pages branch.
# Only needed while Pages is served from a branch; once the Actions workflow in
# .github/workflows/deploy.yml is committed, pushing to main deploys instead.
set -e

REMOTE=$(git remote get-url origin)
npm run build

rm -rf .deploy
cp -R dist .deploy
touch .deploy/.nojekyll

cd .deploy
git init -q -b gh-pages
git add -A
git commit -q -m "Build $(date -u +%Y-%m-%dT%H:%MZ)"
git push -q -f "$REMOTE" gh-pages
cd ..
rm -rf .deploy

echo "Published to gh-pages — https://waqas-amin.github.io/"
