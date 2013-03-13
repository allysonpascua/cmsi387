-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1

Format: 1.0
Source: linux
Binary: linux-source-3.5.0, linux-doc, linux-tools-common, linux-headers-3.5.0-25, linux-libc-dev, linux-tools-3.5.0-25, linux-image-3.5.0-25-generic, linux-image-extra-3.5.0-25-generic, linux-headers-3.5.0-25-generic, linux-image-3.5.0-25-generic-dbgsym, linux-image-3.5.0-25-highbank, linux-image-extra-3.5.0-25-highbank, linux-headers-3.5.0-25-highbank, linux-image-3.5.0-25-highbank-dbgsym, linux-image-3.5.0-25-omap, linux-image-extra-3.5.0-25-omap, linux-headers-3.5.0-25-omap, linux-image-3.5.0-25-omap-dbgsym, linux-image-3.5.0-25-powerpc64-smp, linux-image-extra-3.5.0-25-powerpc64-smp, linux-headers-3.5.0-25-powerpc64-smp, linux-image-3.5.0-25-powerpc64-smp-dbgsym, linux-image-3.5.0-25-powerpc-smp, linux-image-extra-3.5.0-25-powerpc-smp, linux-headers-3.5.0-25-powerpc-smp, linux-image-3.5.0-25-powerpc-smp-dbgsym, kernel-image-3.5.0-25-generic-di, nic-modules-3.5.0-25-generic-di, nic-shared-modules-3.5.0-25-generic-di, serial-modules-3.5.0-25-generic-di,
 ppp-modules-3.5.0-25-generic-di, pata-modules-3.5.0-25-generic-di, firewire-core-modules-3.5.0-25-generic-di, scsi-modules-3.5.0-25-generic-di, plip-modules-3.5.0-25-generic-di, floppy-modules-3.5.0-25-generic-di, fat-modules-3.5.0-25-generic-di, nfs-modules-3.5.0-25-generic-di, md-modules-3.5.0-25-generic-di, multipath-modules-3.5.0-25-generic-di, usb-modules-3.5.0-25-generic-di, pcmcia-storage-modules-3.5.0-25-generic-di, fb-modules-3.5.0-25-generic-di, input-modules-3.5.0-25-generic-di, mouse-modules-3.5.0-25-generic-di, irda-modules-3.5.0-25-generic-di, parport-modules-3.5.0-25-generic-di, nic-pcmcia-modules-3.5.0-25-generic-di, pcmcia-modules-3.5.0-25-generic-di, nic-usb-modules-3.5.0-25-generic-di, sata-modules-3.5.0-25-generic-di, crypto-modules-3.5.0-25-generic-di, squashfs-modules-3.5.0-25-generic-di, speakup-modules-3.5.0-25-generic-di, virtio-modules-3.5.0-25-generic-di, fs-core-modules-3.5.0-25-generic-di, fs-secondary-modules-3.5.0-25-generic-di,
 storage-core-modules-3.5.0-25-generic-di, block-modules-3.5.0-25-generic-di, message-modules-3.5.0-25-generic-di, vlan-modules-3.5.0-25-generic-di,
 ipmi-modules-3.5.0-25-generic-di
Architecture: all i386 amd64 powerpc ppc64 armel armhf
Version: 3.5.0-25.39
Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
Standards-Version: 3.8.4.0
Vcs-Git: http://kernel.ubuntu.com/git-repos/ubuntu/ubuntu-quantal.git
Build-Depends: debhelper (>= 5), cpio, module-init-tools, kernel-wedge (>= 2.24ubuntu1), makedumpfile [amd64 i386], device-tree-compiler [powerpc], libelf-dev, libnewt-dev, binutils-dev, rsync, libdw-dev, dpkg (>= 1.16.0~ubuntu4), util-linux, pkg-config, flex, bison
Build-Depends-Indep: xmlto, docbook-utils, ghostscript, transfig, bzip2, sharutils, asciidoc
Build-Conflicts: findutils (= 4.4.1-1ubuntu1)
Package-List: 
 block-modules-3.5.0-25-generic-di udeb debian-installer standard
 crypto-modules-3.5.0-25-generic-di udeb debian-installer extra
 fat-modules-3.5.0-25-generic-di udeb debian-installer standard
 fb-modules-3.5.0-25-generic-di udeb debian-installer standard
 firewire-core-modules-3.5.0-25-generic-di udeb debian-installer standard
 floppy-modules-3.5.0-25-generic-di udeb debian-installer standard
 fs-core-modules-3.5.0-25-generic-di udeb debian-installer standard
 fs-secondary-modules-3.5.0-25-generic-di udeb debian-installer standard
 input-modules-3.5.0-25-generic-di udeb debian-installer standard
 ipmi-modules-3.5.0-25-generic-di udeb debian-installer standard
 irda-modules-3.5.0-25-generic-di udeb debian-installer standard
 kernel-image-3.5.0-25-generic-di udeb debian-installer extra
 linux-doc deb doc optional
 linux-headers-3.5.0-25 deb devel optional
 linux-headers-3.5.0-25-generic deb devel optional
 linux-headers-3.5.0-25-highbank deb devel optional
 linux-headers-3.5.0-25-omap deb devel optional
 linux-headers-3.5.0-25-powerpc-smp deb devel optional
 linux-headers-3.5.0-25-powerpc64-smp deb devel optional
 linux-image-3.5.0-25-generic deb kernel optional
 linux-image-3.5.0-25-generic-dbgsym deb devel optional
 linux-image-3.5.0-25-highbank deb kernel optional
 linux-image-3.5.0-25-highbank-dbgsym deb devel optional
 linux-image-3.5.0-25-omap deb kernel optional
 linux-image-3.5.0-25-omap-dbgsym deb devel optional
 linux-image-3.5.0-25-powerpc-smp deb kernel optional
 linux-image-3.5.0-25-powerpc-smp-dbgsym deb devel optional
 linux-image-3.5.0-25-powerpc64-smp deb kernel optional
 linux-image-3.5.0-25-powerpc64-smp-dbgsym deb devel optional
 linux-image-extra-3.5.0-25-generic deb kernel optional
 linux-image-extra-3.5.0-25-highbank deb kernel optional
 linux-image-extra-3.5.0-25-omap deb kernel optional
 linux-image-extra-3.5.0-25-powerpc-smp deb kernel optional
 linux-image-extra-3.5.0-25-powerpc64-smp deb kernel optional
 linux-libc-dev deb devel optional
 linux-source-3.5.0 deb devel optional
 linux-tools-3.5.0-25 deb devel optional
 linux-tools-common deb kernel optional
 md-modules-3.5.0-25-generic-di udeb debian-installer standard
 message-modules-3.5.0-25-generic-di udeb debian-installer standard
 mouse-modules-3.5.0-25-generic-di udeb debian-installer extra
 multipath-modules-3.5.0-25-generic-di udeb debian-installer extra
 nfs-modules-3.5.0-25-generic-di udeb debian-installer standard
 nic-modules-3.5.0-25-generic-di udeb debian-installer standard
 nic-pcmcia-modules-3.5.0-25-generic-di udeb debian-installer standard
 nic-shared-modules-3.5.0-25-generic-di udeb debian-installer standard
 nic-usb-modules-3.5.0-25-generic-di udeb debian-installer standard
 parport-modules-3.5.0-25-generic-di udeb debian-installer standard
 pata-modules-3.5.0-25-generic-di udeb debian-installer standard
 pcmcia-modules-3.5.0-25-generic-di udeb debian-installer standard
 pcmcia-storage-modules-3.5.0-25-generic-di udeb debian-installer standard
 plip-modules-3.5.0-25-generic-di udeb debian-installer standard
 ppp-modules-3.5.0-25-generic-di udeb debian-installer standard
 sata-modules-3.5.0-25-generic-di udeb debian-installer standard
 scsi-modules-3.5.0-25-generic-di udeb debian-installer standard
 serial-modules-3.5.0-25-generic-di udeb debian-installer standard
 speakup-modules-3.5.0-25-generic-di udeb debian-installer extra
 squashfs-modules-3.5.0-25-generic-di udeb debian-installer extra
 storage-core-modules-3.5.0-25-generic-di udeb debian-installer standard
 usb-modules-3.5.0-25-generic-di udeb debian-installer standard
 virtio-modules-3.5.0-25-generic-di udeb debian-installer standard
 vlan-modules-3.5.0-25-generic-di udeb debian-installer extra
Checksums-Sha1: 
 737dc47661d4889861d83ace1705321950de9a55 102283735 linux_3.5.0.orig.tar.gz
 25a8db0d43a191acb739a4d84903e72796763ff0 4008110 linux_3.5.0-25.39.diff.gz
Checksums-Sha256: 
 d12d4b8baf39a8122ab253c3b55676ab2e40a078ded1691b551650fd63e3cd9b 102283735 linux_3.5.0.orig.tar.gz
 808f655fc3b58036ed5bdd728bf6935ddf10ced6a5eda6b3af0c4adf2c9f39f1 4008110 linux_3.5.0-25.39.diff.gz
Files: 
 83dbbf2c25e61d3b5b8aaf7101dafd92 102283735 linux_3.5.0.orig.tar.gz
 648dbc869c12e95bbda092a61cc1c5e1 4008110 linux_3.5.0-25.39.diff.gz

-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.11 (GNU/Linux)

iQIcBAEBAgAGBQJRK6fMAAoJEAx7WJsQW+f3zigP/RRLkjvo951C6Rn60LquZDKh
fquBcqAwRWuZMSGO+Cvdc5IOtO9PjxE6fY9qm7+5INBYljcQdam1SSvnc9ZRHouM
X42M3wjAv7ux9Mvn+Q5wyzKCWxI6XULQ2oUY8CYeswe2lycQnRsqP3J9C4LAJGFW
CTyUGRqorkjiC36r4ri03Ap0+Rd5RowSJ1TCWo8T02LjAWUpQdBPH4F7ILWquIK0
iO3NSLDzq50rgf1JIWJFzj/r0Xd/7QJGO7u/4lu8mlYc9vsO4U01i5jiR969Lel5
BPCRtMvk6Kc+0MlfA0kPLZJdVD19HEpZ4K5KWplSc8hzei28uvK1EqIE/mONsrxL
6z35zsk98oIxaArDAarebeNGLQ1IQ2/M9xyR+VsmC7QTcUlGWYvMB/0ykvbIzmbE
Kjma4oleAVYAbIxcdnWWPxHJ7Fi6hUU1w/jroMriaY3rWVDhUWMeKiJ+vmb6WTwT
46YJeQ097gMdx1M9LdNqtuw8fNaFoy9ylTvEuwT3/4elrT2BrTzZLY4/Sr9GzKGJ
5NJrqBLzLPmBiuPF1V7zzcjVQZO2AsIDJBCIMfNPG5ZDcUCLWJKcUZghszT25sIK
b1S9o56+ZbqcmIxvrQ+2Jdr3Bk2VgdwzGUgOJj+XpE67nY+05pKbQAShV6N9Md5Q
JdjOrs6k1NPEuHzpUa6N
=w0BB
-----END PGP SIGNATURE-----
