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
      [ "Unusual Subnets", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md33", null ],
      [ "Proprietary Software Requirements", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md34", [
        [ "Cisco IOS", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md35", null ]
      ] ],
      [ "Topology Summary", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md36", null ],
      [ "Topology Data", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md37", [
        [ "Container Pulls", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md38", null ],
        [ "All Container Config", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md39", null ],
        [ "ISP IPv4 Contract", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md40", null ],
        [ "Loopbacks IPv4 10.131.2.0/26", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md41", null ],
        [ "IPv4 Links in subnet 10.131.2.64/26", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md42", [
          [ "(.64 to .127) subnetted /31", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md43", null ]
        ] ],
        [ "Vlans & IPv4", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md44", [
          [ "vlan 10 sales 10.131.10.0/25 10.131.10.128/25", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md45", null ],
          [ "vlan 20 guest 10.131.20.0/23 10.131.22.0/24", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md46", null ],
          [ "vlan 30 management 10.131.30.0/25 10.131.30.128/25", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md47", null ],
          [ "vlan 40 supervisor 10.131.40.0/25 10.131.40.128/25", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md48", null ],
          [ "vlan 60 guest-services 10.131.60.0/24", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md49", null ],
          [ "vlan 70 internal-services 10.131.70.0/24", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md50", null ],
          [ "vlan 80 accounting 10.131.80.0/24", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md51", null ]
        ] ],
        [ "IPv4 DHCP pools", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md52", [
          [ "Main Site:", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md53", null ],
          [ "Outreach Site:", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md54", null ]
        ] ],
        [ "IPv6", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md55", [
          [ "Native Vlan is 933", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md56", null ],
          [ "Site 1 - Vlan 10 - sales", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md57", null ],
          [ "Site 1 - Vlan 20 - guest", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md58", null ],
          [ "Site 1 - Vlan 30 - management", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md59", null ],
          [ "Site 1 - Vlan 40 - supervisor", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md60", null ],
          [ "Site 1 - Vlan 50 - voice", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md61", null ],
          [ "Site 1 - Vlan 60 - guest services", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md62", null ],
          [ "Site 1 - Vlan 70 - internal services", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md63", null ],
          [ "Site 1 - Vlan 80 - accounting", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md64", null ],
          [ "Site 2 - Vlan 10", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md65", null ],
          [ "Site 2 - Vlan 20", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md66", null ],
          [ "Site 2 - Vlan 30", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md67", null ],
          [ "Site 2 - Vlan 40", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md68", null ]
        ] ],
        [ "ISP Simulation", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md69", null ],
        [ "Topology Diagram (Draft)", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md70", null ]
      ] ],
      [ "Ether-channel", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md71", null ],
      [ "VLANs", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md79", null ],
      [ "STP", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md90", null ],
      [ "IPv4", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md95", null ],
      [ "First Hop Redundancy - HSRP", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md107", null ],
      [ "OSPF", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md111", null ],
      [ "Cisco DHCP (Non-Redundant)", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md117", null ],
      [ "NAT + WAN ACL", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md121", null ],
      [ "VPN - IPSec - PSK", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md126", null ],
      [ "Vlan Access Control (incomplete)", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md130", [
        [ "Main Site", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md131", [
          [ "Vlan 10 Main", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md132", null ],
          [ "Vlan 20 Main", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md133", null ],
          [ "Vlan 30 Main", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md134", null ],
          [ "Vlan 40 Main", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md135", null ],
          [ "web_server_access", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md136", null ],
          [ "dns_server_access", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md137", null ],
          [ "aaa_server_access", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md138", null ],
          [ "management_server_access", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md139", null ]
        ] ]
      ] ],
      [ "Access Layer Security", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md140", null ],
      [ "OSPF Inter-Site", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md148", null ],
      [ "NTP", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md152", null ],
      [ "IPv6 Addressing + HSRP v2", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md156", null ],
      [ "IPv6 Static routes", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md167", null ],
      [ "SSH", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md178", null ],
      [ "Ansible Example", "md__2home_2john_2networking-design_2topology1_2topology1__journal.html#autotoc_md181", null ]
    ] ],
    [ "Docker Images", "md__2home_2john_2networking-design_2docker_2docker__journal.html", [
      [ "aaa server", "md__2home_2john_2networking-design_2docker_2docker__journal.html#autotoc_md185", null ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"index.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';