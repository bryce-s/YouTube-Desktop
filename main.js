const electron = require('electron');
const url = require('url');
const path = require('path');
const { blockWindowAds, adBlocker } = require('electron-ad-blocker');
const windowPlus = require('electron-window-plus');
const {app, BrowserWindow, Menu, ipcMain} = electron;
const {EventEmitter} = require('events')
const {partition, fromPartition, Session, Cookies} = process.atomBinding('session')


app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 1000, height: 1000});
    blockWindowAds(mainWindow)
    mainWindow.loadURL('https://youtube.com');
    adBlocker.parse('')
    // manually add youtube host files--should pull from offline if it works.=
    adBlocker.parse('||host.youtube.com')
    adBlocker.parse('||mx.youtube.com')
    adBlocker.parse('||admin.youtube.com')
    adBlocker.parse('||devel.youtube.com')
    adBlocker.parse('||stats.youtube.com')
    adBlocker.parse('||http.youtube.com')
    adBlocker.parse('||mx0.youtube.com')
    adBlocker.parse('||administration.youtube.com')
    adBlocker.parse('||development.youtube.com')
    adBlocker.parse('||svn.youtube.com')
    adBlocker.parse('||id.youtube.com')
    adBlocker.parse('||mx1.youtube.com')
    adBlocker.parse('||ads.youtube.com')
    adBlocker.parse('||devsql.youtube.com')
    adBlocker.parse('||syslog.youtube.com')
    adBlocker.parse('||adserver.youtube.com')
    adBlocker.parse('||images.youtube.com')
    adBlocker.parse('||mysql.youtube.com')
    adBlocker.parse('||devtest.youtube.com')
    adBlocker.parse('||info.youtube.com')
    adBlocker.parse('||news.youtube.com')
    adBlocker.parse('||alerts.youtube.com')
    adBlocker.parse('||dhcp.youtube.com')
    adBlocker.parse('||test1.youtube.com');
    adBlocker.parse('||internal.youtube.com');
    adBlocker.parse('||noc.youtube.com');
    adBlocker.parse('||alpha.youtube.com');
    adBlocker.parse('||direct.youtube.com');
    adBlocker.parse('||test2.youtube.com');
    adBlocker.parse('||internet.youtube.com');
    adBlocker.parse('||ns.youtube.com');
    adBlocker.parse('||ap.youtube.com');
    adBlocker.parse('||dmz.youtube.com');
    adBlocker.parse('||testing.youtube.com');
    adBlocker.parse('||intra.youtube.com');
    adBlocker.parse('||ns0.youtube.com');
    adBlocker.parse('||apache.youtube.com');
    adBlocker.parse('||dns.youtube.com');
    adBlocker.parse('||upload.youtube.com');
    adBlocker.parse('||intranet.youtube.com');
    adBlocker.parse('||ns1.youtube.com');
    adBlocker.parse('||app.youtube.com');
    adBlocker.parse('||dns0.youtube.com');
    adBlocker.parse('||vm.youtube.com');
    adBlocker.parse('||ipv6.youtube.com');
    adBlocker.parse('||ns2.youtube.com');
    adBlocker.parse('||apps.youtube.com');
    adBlocker.parse('||dns1.youtube.com');
    adBlocker.parse('||vnc.youtube.com');
    adBlocker.parse('||lab.youtube.com');
    adBlocker.parse('||ns3.youtube.com');
    adBlocker.parse('||appserver.youtube.com');
    adBlocker.parse('||dns2.youtube.com');
    adBlocker.parse('||ldap.youtube.com');
    adBlocker.parse('||aptest.youtube.com');
    adBlocker.parse('||download.youtube.com');
    adBlocker.parse('||vpn.youtube.com');
    adBlocker.parse('||linux.youtube.com');
    adBlocker.parse('||ops.youtube.com');
    adBlocker.parse('||auth.youtube.com');
    adBlocker.parse('||en.youtube.com');
    adBlocker.parse('||web.youtube.com');
    adBlocker.parse('||local.youtube.com');
    adBlocker.parse('||oracle.youtube.com');
    adBlocker.parse('||backup.youtube.com');
    adBlocker.parse('||erp.youtube.com');
    adBlocker.parse('||web2test.youtube.com');
    adBlocker.parse('||log.youtube.com');
    adBlocker.parse('||owa.youtube.com');
    adBlocker.parse('||beta.youtube.com');
    adBlocker.parse('||eshop.youtube.com');
    adBlocker.parse('||whois.youtube.com');
    adBlocker.parse('||pbx.youtube.com');
    adBlocker.parse('||blog.youtube.com');
    adBlocker.parse('||exchange.youtube.com');
    adBlocker.parse('||wiki.youtube.com');
    adBlocker.parse('||www.youtube.com');
    adBlocker.parse('||s3.youtube.com');
    adBlocker.parse('||f5.youtube.com');
    adBlocker.parse('||secure.youtube.com');
    adBlocker.parse('||chat.youtube.com');
    adBlocker.parse('||fileserver.youtube.com');
    adBlocker.parse('||www2.youtube.com');
    adBlocker.parse('||server.youtube.com');
    adBlocker.parse('||citrix.youtube.com');
    adBlocker.parse('||firewall.youtube.com');
    adBlocker.parse('||xml.youtube.com');
    adBlocker.parse('||main.youtube.com');
    adBlocker.parse('||shop.youtube.com');
    adBlocker.parse('||cms.youtube.com');
    adBlocker.parse('||forum.youtube.com');
    adBlocker.parse('||manage.youtube.com');
    adBlocker.parse('||sip.youtube.com');
    adBlocker.parse('||corp.youtube.com');
    adBlocker.parse('||mgmt.youtube.com');
    adBlocker.parse('||crs.youtube.com');
    adBlocker.parse('||mirror.youtube.com');
    adBlocker.parse('||sql.youtube.com');
    adBlocker.parse('||cvs.youtube.com');
    adBlocker.parse('||git.youtube.com');
    adBlocker.parse('||mobile.youtube.com');
    adBlocker.parse('||squid.youtube.com');
    adBlocker.parse('||database.youtube.com');
    adBlocker.parse('||gw.youtube.com');
    adBlocker.parse('||help.youtube.com');
    adBlocker.parse('||monitor.youtube.com');
    adBlocker.parse('||ssh.youtube.com');
    adBlocker.parse('||db.youtube.com');
    adBlocker.parse('||mssql.youtube.com');
    adBlocker.parse('||ssl.youtube.com');
    adBlocker.parse('||demo.youtube.com');
    adBlocker.parse('||helpdesk.youtube.com');
    adBlocker.parse('||mta.youtube.com');
    adBlocker.parse('||dev.youtube.com');
    adBlocker.parse('||home.youtube.com');
});
