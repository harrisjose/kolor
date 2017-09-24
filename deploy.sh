set -e
GITURL=`git config remote.origin.url`
COMMIT=`git rev-parse HEAD`
cd dist
rm -rf .git/
git init
git remote add origin $GITURL
git add .
git commit -am `date +'%m/%d/%Y'`
echo 'Pushing to ' $GITURL
git push origin master:gh-pages --force
