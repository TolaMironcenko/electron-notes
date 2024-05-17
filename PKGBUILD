pkgname=electron-notes
pkgver=1.0.0
pkgrel=1
pkgdesc="notes app written on electronjs"
arch=('x86_64')
license=('GPL')
source=("git+https://github.com/TolaMironcenko/electron-notes.git")

build() {
    cd $pkgname
    npm install
    npm run package
}

package() {
    cd $pkgname
    pwd
    mkdir -p $pkgdir/opt $pkgdir/usr/share/applications $pkgdir/usr/share/electron-notes
    cp -rv out/electron-notes-linux-x64 $pkgdir/opt
    cp -v electron-notes.desktop $pkgdir/usr/share/applications
    cp -v notes.jpg $pkgdir/usr/share/electron-notes
}

post_install() {
    chmod 4755 /opt/electron-notes-linux-x64
}

cksums=('SKIP')
