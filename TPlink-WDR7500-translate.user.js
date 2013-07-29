// ==UserScript==
// @name          TPlink WDR7500 WEB-UI English Translation
// @description   Author: Zollner Robert
// @version       0.1
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @include       http://192.168.1.1/*
// @include       http://192.168.50.133/*
// @include       http://192.168.55.5/*
// @grant         none
// ==/UserScript==

var dict_ch2eng = {
	"运行状态":"Operating status",
	"设置向导":"Setup Wizard",
	"网络参数":"Network parameters",
		"WAN口设置":"WAN port settings",
		"LAN口设置":"LAN port settings",
		"MAC地址克隆":"MAC address cloning",
	"无线频段设置":"Wireless band setting",
	"无线设置 2.4GHz":"2.4GHz wireless settings",
		"基本设置":"Basic Settings",
		"QSS安全设置":"QSS security settings",
		"QSS安全设置":"QSS security settings2",
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
		"bbb":"",
		"bbb":"",
		"bbb":"",
	"安全功能":"Security Features",
	"家长控制":"Parental Controls",
	"上网控制":"Internet access control",
	"路由功能":"Routing functions",
	"IP带宽控制":"IP bandwidth control",
	"IP与MAC绑定":"IP and MAC binding",
	"动态DNS":"Dynamic DNS",
	"系统工具":"System Tools",
	"更多TP-LINK产品，请点击查看 >>":"More TP-LINK products Click to view"
	
};

var dict_ch2eng_btn = {
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
	"bbb":"",
};

var dict_ch2eng_title = {
	"版本信息":"Version Information",
	"WAN口状态":"WAN Status",
	"LAN口状态":"LAN port status",
	"无线状态 2.4GHz":"2.4GHz wireless status",
	"无线状态 5GHz":"5GHz wireless status",
	"WAN口流量统计":"WAN port traffic statistics",
    "无线网络基本设置 (2.4GHz)":"Wireless Network Basic Settings (2.4GHz)",
	"无线网络安全设置":"Wireless Network Security Settings",
	"无线网络MAC地址过滤设置":"Wi-Fi MAC address filtering settings",
	"无线网络主机状态":"Wireless Network Host Status",
	"无线网络基本设置 （5GHz）":"Wireless Network Basic Settings (5GHz)",
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
	"bbb":"",
}

var dict_ch2eng_description = {
	"IP地址：":"IP address",
	"IP 地址：":"IP address",
	"MAC地址：":"MAC address:",
	"子网掩码：":"Subnet Mask:",
	"网关：":"Gateway:",
	"数据包MTU(字节)：":"Packet MTU (bytes):",
	"数据包MTU（字节）：":"Packet MTU (bytes):",
	"当前软件版本：":"Current software version:",
	"当前硬件版本：":"Current hardware version:",
	"MAC 地址：":"MAC address:",
	"DNS 服务器：":"DNS server:",
	"无线功能：":"Wireless:",
	"信 道：":"Channel:",
	"模 式：":"Modes:",
	"频段带宽：":"Band Bandwidth:",
	"SSID号：":"SSID number:",
	"自动":"Automatic",
	"WDS状态：":"WDS Status:",
	"未开启":"Not turned on",
	"WAN口连接类型：":"WAN port connection type:",
	"DNS服务器：":"DNS server:",
	"备用DNS服务器：":"Alternate DNS server:",
	"主机名：":"Host Name:",
	"本页设置LAN口的基本网络参数。":"This page is set up the LAN port of the basic network parameters.",
	"本页设置路由器对广域网的MAC地址。":"This page is set up the router for WAN MAC address.",
	"当前管理PC的MAC地址：":"MAC address of the connected computer*:",
	"注意：只有局域网中的计算机才能使用本功能。":"*Note: Only the LAN connected computer can use this feature.",
	"无线模式：":"Wireless Mode:",
	"信道：":"Channel:",
	"本页面设置路由器无线网络的基本参数。":"This page is set basic parameters of the wireless network router.",
	"QSS功能：":"QSS function:",
	"当前PIN码：":"Current PIN code:",
	"添加新设备：":"Add a new device:",
	"认证类型：":"Authentication Type:",
	"加密算法：":"Encryption algorithms:",
	"PSK密码：":"PSK Password:",
	"组密钥更新周期：":"Group Key Update Period:",
	"Radius服务器IP：":"Radius Server IP:",
	"Radius端口：":"Radius Port:",
	"Radius密码：":"Radius Password:",
	"WEP密钥格式：":"WEP key format:",
	"密钥 1：":"Key 1",
	"密钥 2：":"Key 2",
	"密钥 3：":"Key 3",
	"密钥 4：":"Key 4",
	"密钥选择":"Key selection",
	"WEP密钥":"WEP key",
	"密钥类型":"Key Types",
	"缺省域名：":"Default Domain Name:",
	"主DNS服务器：":"Primary DNS Server:",
	"DHCP服务器：":"DHCP server:",
	"地址池开始地址：":"Address pool starting address:",
	"地址池结束地址：":"Address pool end address:",
	"地址租期：":"Address lease:",
	"本路由器内建的DHCP服务器能自动配置局域网中各计算机的TCP/IP协议。":"The router built-in DHCP server can automatically configure the LAN each computer's TCP / IP protocol.",
	"本页设置DHCP服务器的静态地址分配功能。":"This page is set up static address assignment DHCP server function.",
	"不开启无线安全":"Wireless security disabled",
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
