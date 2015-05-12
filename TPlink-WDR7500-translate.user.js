// ==UserScript==
// @name          TPlink WDR7500 WEB-UI English Translation
// @description   Author: Zollner Robert
// @version       0.1
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @include       http://192.168.1.1/*
// @include       http://192.168.1.8/*
// @include       http://192.168.50.133/*
// @include       http://192.168.55.5/*
// @grant         none
// ==/UserScript==

var dict_ch2eng = {
	//Translation left menu
	//for a gap "bbb":"",
	"运行状态":"Operating status",
	"设置向导":"Setup Wizard",
	"网络参数":"Network parameters",
		"WAN口设置":"WAN port settings",
		"LAN口设置":"LAN port settings",
		"WAN口速率/模式":"WAN port speed/mode",
		"MAC地址克隆":"MAC address cloning",
	"无线频段设置":"Wireless band setting",
	"无线设置 2.4GHz":"2.4GHz wireless settings",
		"基本设置":"Basic Settings",
		"QSS安全设置":"QSS security settings",
		//Not neccesary 
		//"QSS安全设置":"QSS security settings2",
		"无线安全设置":"Wireless security settings",
		"无线MAC地址过滤":"Wireless MAC address filtering",
		"无线高级设置":"Wireless Advanced Settings",
		"主机状态":"Host Status",
	"无线设置 5GHz":"5GHz Wireless Settings",
		// same as above
	"DHCP服务器":"DHCP server",
		"DHCP服务":"DHCP Service",
		"客户端列表":"Client List",
		"静态地址分配":"Static address assignment",
	"网络共享":"Network sharing",
		"网络共享管理":"Network share management",
		"FTP服务器":"FTP Server",
		"媒体服务器":"Media Server",
		"打印服务器":"Print server",
		"共享帐户":"Shared Account",
	"NAT设置":"NAT settings",
	"转发规则":"Forwarding rules",
		"虚拟服务器":"Virtual Server",
		"特殊应用程序":"Special Applications",
		"DMZ主机":"DMZ Host",
		"UPnP设置":"UPnP Settings",
	"安全功能":"Security Features",
		"安全设置":"Security Settings",
		"局域网WEB管理":"LAN Web Management",
		"远端WEB管理":"Remote Web Management",
	"家长控制":"Parental Controls",
	"上网控制":"Internet access control",
		"规则管理":"Rules Management",
		"主机列表":"Host List",
		"访问目标":"Access target",
		"日程计划":"Schedule",
	"路由功能":"Routing functions",
		"静态路由表":"Static Routing Table",
		"系统路由表":"System routing table",
	"IP带宽控制":"IP bandwidth control",
		"控制设置":"Control Settings",
		"控制规则":"Control Rules",
	"IP与MAC绑定":"IP and MAC binding",
		"静态ARP绑定设置":"Static ARP binding settings",
		"ARP映射表":"ARP table",
	"动态DNS":"Dynamic DNS",
	"系统工具":"System Tools",
		"时间设置":"Datetime management",
		"诊断工具":"Diagnostic Tools",
		"软件升级":"Software Upgrade",
		"恢复出厂设置":"Restore factory settings",
		"备份和载入配置":"Backup Settings",
		"重启路由器":"Reboot router",
		"修改登录口令":"Change Password",
		"系统日志":"System Log",
		"流量统计":"Traffic Statistics",
	//"更多TP-LINK产品，请点击查看 >>":"More TP-LINK products Click to view"
	"更多TP-LINK产品，请点击查看 >>":"TP-LINK products"
	
};

var dict_ch2eng_btn = {
	//Buttons
	"保 存":"Save",
	"保存":"Save",
	"帮 助":"Help",
	"帮助":"Help",
	"返回":"Back",
	"返 回":"Back",
	"上一页": "Prev",
	"上一步": "Return",
	"下一页":"Next",
	"下一步":"Next",
	"添加新条目": "Add a new entry",
	"增加单个条目": "Add a single entry",
	"使所有条目生效": "Enable All",
	"使所有条目失效": "Disable All",
	"删除所有条目": "Delete all",
	"刷 新": "Refresh",
	"释 放": "Release IP",
	"更 新": "Renew IP",
	"新增使用者": "Add user",
	"自动检测":"Discover",
	"恢复出厂MAC":"Restore Factory MAC",
	"克隆MAC地址":"Clone MAC address",
	"启用QSS":"Enable Qss",
	"关闭QSS":"Disable Qss",
	"恢复初始PIN码":"Restore the initial PIN code",
	"产生新的PIN码":"Generate a new PIN code",
	"添加设备":"Add Device",
	"查找指定条目":"Find",
	"登 录":"Login",
	"退 出":"Logout",
	"启用":"Enable",
	"弹出设备":"Safely Remove",
	"重新扫描":"Rescan",
	"添加新文件夹":"Add a new folder",
	"全部扫描":"Full Scan",
	"新增文件夹":"New Folder",
	"名称":"Name",
	"连 接":"Connect",
	"断 线":"Disconnect",
	"未连接":"Not connected",
	"高级设置":"Advanced Settings",
	"返 回" : "Back",
	"重启路由器":"Reboot Router",
	//Setup Wizard
	//Next buttons not working
	"重 试":"Retry",
	"重试":"Retry",
	//Datetime Management
	"获取GMT时间":"Get GMT Time",
	"bbb":"",
};

var dict_ch2eng_title = {
	//Titles on right square
	//Operating status
	"版本信息":"Version Information",
	"WAN口状态":"WAN Status",
	"LAN口状态":"LAN port status",
	"无线状态 2.4GHz":"2.4GHz wireless status",
	"无线状态 5GHz":"5GHz wireless status",
	"WAN口流量统计":"WAN port traffic statistics",
	"设置向导-上网方式":"Setup Wizard - Internet way",
    "无线网络基本设置 (2.4GHz)":"Wireless Network Basic Settings (2.4GHz)",
	"无线网络安全设置":"Wireless Network Security Settings",
	"无线网络MAC地址过滤设置":"Wi-Fi MAC address filtering settings",
	"无线网络主机状态":"Wireless Network Host Status",
	"无线网络基本设置 （5GHz）":"Wireless Network Basic Settings (5GHz)",
	//Not working
	//"QSS 安全 设置":"QSS Security Settings",
	"文件系统":"File System",
	"文件夹":"Folder",
	"删除":"Delete",
	"使用者账户":"User Account",
	"密码":"Password",
	"网络共享存取权限":"Network share access rights",
	"FTP访问权限":"FTP Access",
	"修改":"Edit",
	"客户端名":"Client name",
	"MAC 地址":"MAC address",
	"IP 地址":"IP address",
	"MAC地址":"MAC address",
	"IP地址":"IP address",
	"有效时间":"Connection time",
	"状 态":"Status",
	"编 辑":"Edit",
	"无线网络安全设置（5GHz）":"Wireless network security settings (5GHz)",
	"错误":"Error",
	"WAN口速率和双工模式设置":"WAN port speed and duplex mode settings",
	"bbb":"",
}

var dict_ch2eng_description = {
	//Operating status
	"无线功能：":"Wireless:",
	"信 道：":"Channel:",
	"模 式：":"Modes:",
	"频段带宽：":"Band Bandwidth:",
	"SSID号：":"SSID number:",
	"自动":"Automatic",
	"WDS状态：":"WDS Status:",
	"未开启":"Not turned on",
	"WAN口连接类型：":"WAN port connection type:",
	"主机名：":"Host Name:",
	"自动（当前信道 1）":"Auto (current channel 1)",
	"自动（当前信道 2）":"Auto (current channel 2)",
	"自动（当前信道 3）":"Auto (current channel 3)",
	"自动（当前信道 4）":"Auto (current channel 4)",
	"自动（当前信道 5）":"Auto (current channel 5)",
	"自动（当前信道 6）":"Auto (current channel 6)",
	"自动（当前信道 7）":"Auto (current channel 7)",
	"自动（当前信道 8）":"Auto (current channel 8)",
	"自动（当前信道 9）":"Auto (current channel 9)",
	"自动（当前信道 10）":"Auto (current channel 10)",
	"自动（当前信道 11）":"Auto (current channel 11)",
	"自动（当前信道 12）":"Auto (current channel 12)",
	"自动（当前信道 13）":"Auto (current channel 13)",
	"自动（当前信道 149）":"Auto (current channel 149)",
	"自动（当前信道 153）":"Auto (current channel 153)",
	"自动（当前信道 157）":"Auto (current channel 157)",
	"自动（当前信道 161）":"Auto (current channel 161)",
	"自动（当前信道 165）":"Auto (current channel 165)",
	"字节数：":"Bytes:",
	"数据包数：":"Packets",
	"运行时间：":"Running time:",
	
	//Setup Wizard
	"本向导可设置上网所需的基本网络参数，请单击“下一步”继续。若要详细设置某项功能或参数，请点击左侧相关栏目。":"The wizard will help you to set up basic network parameters required for the Internet, click 'Next' to continue. To set a specific function or parameters in detail, please click on the left side of the relevant section.",
	"本向导提供三种最常见的上网方式供选择。若为其它上网方式，请点击左侧“网络参数”中“WAN口设置”进行设置。如果不清楚使用何种上网方式，请选择“让路由器自动选择上网方式”。":"This guide provides the three most common means of access available. If it is another means of access, please click on the left 'network parameters' in the 'WAN port settings' set. If you do not know what way to use the Internet, select 'Internet mode allows the router to automatically select.'",
	//As with the others, if use this, when the check box is selected, dissapear
	//"让路由器自动选择上网方式 (推荐)":"Let the router automatically select the means of access (recommended)",
	//"PPPoE（ADSL虚拟拨号）":"PPPoE (ADSL virtual dial-up)",
	//"动态IP（以太网宽带，自动从网络服务商获取IP地址）":"Dynamic IP (Ethernet broadband, automatically obtain IP address from the network service provider)",
	//"静态IP（以太网宽带，网络服务商提供固定IP地址）":"Static IP (Ethernet broadband, Internet service providers offer fixed IP address)",
	"网线没有插好。":"Network cable is not plugged in.",
	"继续之前，请确保WAN口网线两端均连接正常，然后单击“重试”。":"Before proceeding, make sure that both ends of the WAN port network lines are connected properly, and then click the 'Retry' --> 重试.",
	
	//Network parameters
	
	//WAN port settings
	"IP地址：":"IP address:",
	"IP 地址：":"IP address:",
	"MAC地址：":"MAC address:",
	"MAC 地址：":"MAC address:",
	"子网掩码：":"Subnet Mask:",
	"网关：":"Gateway:",
	"数据包MTU(字节)：":"Packet MTU (bytes):",
	"数据包MTU（字节）：":"Packet MTU (bytes):",
	"DNS 服务器：":"DNS server:",
	"DNS服务器：":"DNS server:",
	"备用DNS服务器：":"Alternate DNS server:",
	//Not working
	//"  WAN口未连接！":"Wan Port is not connected.",
	
	//As with the others, if use this, when the check box is selected, dissapear
	//"（默认是1500，如非必要，请勿修改）":"The default is 1500, if not necessary, do not modify)",
	//"手动设置DNS服务器":"DNS server settings manually",
	//"单播方式获取IP （一般情况下请勿选择）":"Unicast way to get IP (Do not choose general)",
	
	//Error Page
	"错误代码：5005":"Error Code: 5005",
	"首选DNS服务器地址错误，请重新输入。":"Preferred DNS server address is wrong, please try again.",
	
	//Lan port settings
	"本页设置LAN口的基本网络参数。":"This page is set up the LAN port of the basic network parameters.",
	//Wan port speed and duplex mode settings
	"本页设置WAN口的速率和双工模式。":"This page is WAN port speed and duplex mode.",
	"当前模式：":"Current Mode:",
	//"WAN口未连接！":"Wan Port is not connected",
	"模式设置：":"Mode Settings:",

	//Mac address cloning
	"本页设置路由器对广域网的MAC地址。":"This page is set up the router for WAN MAC address.",
	"当前管理PC的MAC地址：":"MAC address of the connected computer*:",
	"注意：只有局域网中的计算机才能使用本功能。":"*Note: Only the LAN connected computer can use this feature.",

	//Wireless band setting
	//As with the others, if use this, when the check box is selected, dissapear
	//"本路由器支持双频无线，该页可设置无线工作的频段。":"The router supports dual-band wireless, you can set the page-band wireless work.",
	//"无线同时工作在2.4GHz和5GHz频段(802.11a/b/g/n/ac)上":"Radio working at 2.4GHz and 5GHz band (802.11a/b/g/n/ac) on",
	//"无线只工作在2.4GHz频段(802.11b/g/n)上":"Wireless only works in the 2.4GHz band (802.11b/g/n) on",
	//"无线只工作在5GHz频段(802.11a/n/ac)上":"Wireless only works in the 5GHz band (802.11a/n/ac) on",
	//"关闭无线（包括2.4GHz和5GHz频段）。":"Close Wireless (including 2.4GHz and 5GHz bands).",
	//"您已经更改了无线设置，重启后生效。":"You have changed the wireless settings take effect after the restart.",
	
	//Message after change something, not working
	//"您已经更改了无线设置，重启后生效。":"You have changed the wireless settings, changes will take effect after the reboot.",		
	"本页面设置路由器无线网络的基本参数。":"This page is set basic parameters of the wireless network router.",
	"无线模式：":"Wireless Mode:",
	"信道：":"Channel:",
	
	//QSS security settings
	//Not working
	//"QSS功能：":"QSS function:",
	"已关闭 ":"Closed",
	//if use next one, checkbox will appear as disabled
	//"锁定路由PIN码":"PIN code lock routing",
	"当前PIN码：":"Current PIN code:",
	"添加新设备：":"Add a new device:",
	//Wireless Security Settings
	"本页面设置路由器无线网络的安全认证选项。":"This page is to set the security authentication options router wireless network.",
	//Not working both
	//"安全提示：为保障网络安全，强烈推荐开启安全设置，并使用WPA-PSK/WPA2-PSK AES加密方法。":"Safety Tips: To protect network security, it is strongly recommended to open the security settings and use WPA-PSK/WPA2-PSK AES encryption method.",
	//"安全提示： 为保障网络安全， 强烈推荐开启安全设置， 并使用WPA-PSK/WPA2-PSK AES加密方法。":"Safety Tips: To protect network security, it is strongly recommended to open the security settings and use WPA-PSK/WPA2-PSK AES encryption method.",
	//With this happen the same, check dissapear
	"不开启无线安全":"Wireless security disabled",
	"认证类型：":"Authentication Type:",
	"加密算法：":"Encryption algorithms:",
	"PSK密码：":"PSK Password:",
	"（8-63个ASCII码字符或8-64个十六进制字符）":"(8-63 8-64 ASCII characters or hexadecimal characters)",
	"组密钥更新周期：":"Group Key Update Period:",
	"（单位为秒，最小值为30，不更新则为0）":"(In seconds, minimum value is 30, no update=0)",
	"Radius服务器IP：":"Radius Server IP:",
	"Radius端口：":"Radius Port:",
	"Radius密码：":"Radius Password:",
	"（1－65535，0表示默认端口：1812）":"(1-65535,0 indicates the default port: 1812)",
	"WEP密钥格式：":"WEP key format:",
	"密钥 1：":"Key 1",
	"密钥 2：":"Key 2",
	"密钥 3：":"Key 3",
	"密钥 4：":"Key 4",
	"密钥选择":"Key selection",
	"WEP密钥":"WEP key",
	"密钥类型":"Key Types",
	//Wireless Advanced Settings
	"传输功率:":"Transmission Power:",
	"Beacon时槽：":"Beacon Slot",
	"RTS时槽：":"RTS slot:",
	"分片阈值：":"Fragmentation Threshold:",
	"DTIM阈值：":"DTIM Threshold:",
	//if use next ones, the ones that are enabled will appears as disabled
	//"开启 WMM":"Open WMM",
	//"开启 Short GI":"Open Short GI",
	//"开启 AP隔离":"Open AP Isolation",
	//DHCP Server
	"缺省域名：":"Default Domain Name:",
	"主DNS服务器：":"Primary DNS Server:",
	"DHCP服务器：":"DHCP server:",
	"地址池开始地址：":"Address pool starting address:",
	"地址池结束地址：":"Address pool end address:",
	"地址租期：":"Address lease:",
	"本路由器内建的DHCP服务器能自动配置局域网中各计算机的TCP/IP协议。":"The router built-in DHCP server can automatically configure the LAN each computer's TCP / IP protocol.",
	"本页设置DHCP服务器的静态地址分配功能。":"This page is set up static address assignment DHCP server function.",
	
	//Network share management
	"本页设置网络共享服务的基本参数。":"Set the basic parameters of the network shared services.",
	"设备状态：":"Condition:",
	
	//Nat settings
	//Not Working
	//"注意： 只有当NAT启用时，硬件NAT的设置才能生效。":"Note: Only when NAT is enabled, hardware NAT settings to take effect.",
	//"启用":"Enable",
	//"停用":"Disable",
	"NAT状态：":"NAT Status:",
	"硬件NAT状态：":"Hardware NAT Status:",
	//
	"PPPoE连接:":"PPPoE connection:",
	"上网账号：":"Username:",
	"上网帐号：":"Username",
	"上网口令：":"Password:",
	"确认口令：":"Confirm Password:",
	"特殊拨号：":"Special dialing:",
	"第二连接：":"The second connection:",
	"根据您的需要，请选择对应的连接模式：":"Depending on your needs, please select the corresponding connection mode:",
	"按需连接，在有访问时自动连接":"Connect on demend",
	"按需连接，在有访问数据时自动进行连接":"Connect on demend",
	"自动连接，在开机和断线后自动连接":"Connect automatic",
	"定时连接，在指定的时间段自动连接":"Connect automatically at specified schedule",
	"手动连接，由用户手动连接":"Manual connect",
	"注意：只有当您到“系统工具”菜单的“时间设置”项设置了当前时间后，“定时连接”功能才能生效。":"Note: Correct time setting must be configured",
	"自动断线等待时间：":"Atomatic disconect idle time",
	"服务器 IP /域名：":"Server IP / Domain Name:",
	//System Tools
	//Datetime Management
	"本页设置路由器的系统时间，您可以选择自己设置时间或者从互联网上获取标准的GMT时间。":"This page set system time of router , you can choose your own time or obtain standard GMT time from the Internet .",
	"您可以在这保存您的设置。我们建议您在修改配置及升级软件前备份您的配置文件。":"You can save your settings in this . We recommend you to back up your configuration files before modifying the configuration and software upgrades.",
	"单击此按钮将使路由器重新启动。":"Clicking this button will cause the router to restart.",
	"注意：关闭路由器电源后，时间信息会丢失，当您下次开机连上Internet后，路由器将会自动获取GMT时间。您必须先连上Internet获取GMT时间或到此页设置时间后，其他功能（如上网控制）中的时间限定才能生效。":"Note : Turn off the router power, the time will be lost when you next boot connect the Internet, the router will automatically obtain the GMT time . You must first connect to the Internet and obtain GMT time or set the time to this page , the other functions (such as access control ) in the time limit to take effect.",
	"优先使用NTP服务器1：":"NTP server priority 1:","bbb":"",
	"优先使用NTP服务器2：":"NTP server priority 2:","bbb":"",
	"（仅在连上互联网后才能获取GMT时间）":"(Only after connecting to the Internet to get GMT time)",
	"获取网络时间错误，请检查是否正确连接到网络。":"Network time error, please check if the router is properly connected to the network.",
	//Error Page
	"错误代码：5028":"Error Code: 5028",
	//Diagnostic Tools
	"在本页面可以使用ping或者tracert，诊断路由器的连接状态。":"In this page you can use the ping or tracert, diagnose the connection status of the router.",
	"参数设置":"Parameter settings",	
	"选择操作：":"Select Options:",
	"IP 地址/域名：":"IP Address / Domain Name :",
	"Ping 包数目：":"Ping Packages Nº:",
	"Ping 包大小":"Ping packet size",
	"（4-1472字节）":"( 4-1472 bytes)",
	"Ping 超时：":"Ping Timeout:",
	"（100-2000 毫秒）":"( 100-2000 ms)",
	"Tracert 跳数：":"Tracert Hops :",
	"诊断结果":"Diagnosis",
	"路由器已经就绪。":"The router is ready.",
	//Software Upgrade
	"通过升级本路由器的软件，您将获得新的功能。":"By upgrading the router's software, you will get new features.",
	"文 件：":"File:",
	"当前软件版本：":"Current software version:",
	"当前硬件版本：":"Current hardware version:",
	"WAN口未连接！":"",
	//Restore factory settings
	"单击此按钮将使路由器的所有设置恢复到出厂时的默认状态。":"Clicking this button will restore all settings of the router to the factory default state.",
	//System log
  "本页显示路由器的系统日志。用户可以分类、分级查看其中部分日志，并且可以保存日志内容或将日志内容通过邮件发送。":"This page shows the router's system log. Users can sorting, grading to view some of the log, and you can save the log contents or contents of the log by email.",
	"bbb":"",
}


var dict_ch2eng_options = {
	"动态IP":"Dynamic IP",
	"静态IP":"Static IP",
	"其它掩码":"Other netmask",
	"自动":"Automatic",
	"十六进制":"Hex",
	"ASCII码":"ASCII code",
	"禁用":"Disabled",
	"自动选择拨号模式":"Automatically select the dialing mode",
	"正常拨号模式":"Normal dialing mode",
	"特殊拨号模式1":"Special dial mode 1",
	"特殊拨号模式2":"Special dial mode 2",
	"特殊拨号模式3":"Special dial mode 3",
	"特殊拨号模式4":"Special dial mode 4",
	"特殊拨号模式5":"Special dial mode 5",
	"特殊拨号模式6":"Special dial mode 6",
	"特殊拨号模式7":"Special dial mode 7",
	"bbb":"",
}



var dict_ch2eng_all={};
$.extend(dict_ch2eng_all, dict_ch2eng, dict_ch2eng_btn, dict_ch2eng_title, dict_ch2eng_options, dict_ch2eng_description ); 

$('document').ready(function(){
	var url_location = window.location.pathname;
	if( url_location == '/userRpm/MenuRpm.htm') {

		// Left Nav Menu
		$('menu').find('ol>a').each(function() {
			var target_text = String.trim( $(this).text() );
			if( dict_ch2eng[target_text] !== undefined ){
				$(this).text( dict_ch2eng[target_text] );
			}
		});

	}

	// Buttons
	$('input.button').each(function() {
		var target_text = String.trim( $(this).val() );
		if( dict_ch2eng_btn[target_text] !== undefined ) {
			$(this).val( dict_ch2eng_btn[target_text] );
		}
	});

/*
	// Table Title
	$('tr>td.title,tr>td[class*=ListTC]').each(function(){
		var target_text = String.trim( $(this).text() );
		if( dict_ch2eng_all[target_text] !== undefined ){
			$(this).text( dict_ch2eng_all[target_text] );
		}
	});
*/
	// Table cells ALL
	$('tr>td').each(function() {
		var target_text = String.trim( $(this).text() );
		var target_html = String.trim( $(this).html() );

		if( dict_ch2eng_all[target_text] !== undefined && dict_ch2eng_all[target_text].length > 0) {
			target_html= target_html.replace(target_text,dict_ch2eng_all[target_text]);
			$(this).html( target_html );
			
			/*
			$(this).text( dict_ch2eng_all[target_text] );
			*/
		}
	});

	// Input Options
	$('select>option').each(function() {
		var target_text = String.trim( $(this).text() );
		if( dict_ch2eng_options[target_text] !== undefined && dict_ch2eng_options[target_text].length > 0 ) {
			$(this).text( dict_ch2eng_options[target_text] );
		}
	});

	// resize Text Input fields
	$('form>table').each(function() {
		$(this).find("input").each(function() {
			var input_size = $(this).attr("size");
			if( input_size !== undefined && input_size > 15 ) {
				$(this).attr( "size","15" );
			}
		});
	});
    
});
