/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Networking Design - Johnathan Moore", "index.html", [
    [ "Main", "index.html", null ],
    [ "NAT66 Router", "nat66_router.html", null ],
    [ "Topology 1 Journal", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html", [
      [ "Proprietary Software Requirements", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md31", [
        [ "Cisco IOS", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md32", null ]
      ] ],
      [ "Topology Summary", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md33", null ],
      [ "Topology Data", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md34", [
        [ "Container Pulls", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md35", null ],
        [ "All Container Config", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md36", null ],
        [ "ISP IPv4 Contract", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md37", null ],
        [ "Loopbacks IPv4 192.168.2.0/26", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md38", null ],
        [ "IPv4 Links in subnet 192.168.2.64/26", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md39", [
          [ "(.64 to .127) subnetted /31", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md40", null ]
        ] ],
        [ "Vlans & IPv4", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md41", [
          [ "vlan 10 sales 192.168.10.0/25 192.168.10.128/25", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md42", null ],
          [ "vlan 20 guest 192.168.20.0/23 192.168.22.0/24", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md43", null ],
          [ "vlan 30 management 192.168.30.0/25 192.168.30.128/25", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md44", null ],
          [ "vlan 40 supervisor 192.168.40.0/25 192.168.40.128/25", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md45", null ],
          [ "vlan 60 guest-services 192.168.60.0/24", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md46", null ],
          [ "vlan 70 internal-services 192.168.70.0/24", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md47", null ],
          [ "vlan 80 accounting 192.168.80.0/24", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md48", null ]
        ] ],
        [ "IPv4 DHCP pools", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md49", [
          [ "Main Site:", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md50", null ],
          [ "Outreach Site:", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md51", null ]
        ] ],
        [ "IPv6", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md52", [
          [ "Native Vlan is 933", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md53", null ],
          [ "Site 1 - Vlan 10 - sales", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md54", null ],
          [ "Site 1 - Vlan 20 - guest", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md55", null ],
          [ "Site 1 - Vlan 30 - management", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md56", null ],
          [ "Site 1 - Vlan 40 - supervisor", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md57", null ],
          [ "Site 1 - Vlan 50 - voice", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md58", null ],
          [ "Site 1 - Vlan 60 - guest services", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md59", null ],
          [ "Site 1 - Vlan 70 - internal services", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md60", null ],
          [ "Site 1 - Vlan 80 - accounting", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md61", null ],
          [ "Site 2 - Vlan 10", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md62", null ],
          [ "Site 2 - Vlan 20", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md63", null ],
          [ "Site 2 - Vlan 30", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md64", null ],
          [ "Site 2 - Vlan 40", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md65", null ]
        ] ],
        [ "ISP Simulation", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md66", null ],
        [ "Topology Diagram (Draft)", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md67", null ]
      ] ],
      [ "Ether-channel", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md68", null ],
      [ "VLANs", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md76", null ],
      [ "STP", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md87", null ],
      [ "IPv4", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md92", null ],
      [ "First Hop Redundancy - HSRP", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md104", null ],
      [ "OSPF", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md108", null ],
      [ "Cisco DHCP (Non-Redundant)", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md114", null ],
      [ "NAT + WAN ACL", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md118", null ],
      [ "VPN - IPSec - PSK", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md123", null ],
      [ "Vlan Access Control (incomplete)", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md127", [
        [ "Main Site", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md128", [
          [ "Vlan 10 Main", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md129", null ],
          [ "Vlan 20 Main", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md130", null ],
          [ "Vlan 30 Main", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md131", null ],
          [ "Vlan 40 Main", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md132", null ],
          [ "web_server_access", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md133", null ],
          [ "dns_server_access", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md134", null ],
          [ "aaa_server_access", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md135", null ],
          [ "management_server_access", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md136", null ]
        ] ]
      ] ],
      [ "Access Layer Security", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md137", null ],
      [ "OSPF Inter-Site", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md145", null ],
      [ "NTP", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md149", null ],
      [ "IPv6 Addressing + HSRP v2", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md153", null ],
      [ "IPv6 Static routes", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md164", null ],
      [ "SSH", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md175", null ],
      [ "Ansible Example", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md178", null ]
    ] ],
    [ "Docker Images", "md__2home_2john_2networking-design_2docker_2docker__journal.html", [
      [ "aaa server", "md__2home_2john_2networking-design_2docker_2docker__journal.html#autotoc_md182", null ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"index.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';