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
    [ "Readme", "index.html", null ],
    [ "NAT66 Router", "md__home_john_networking_design_nat66_router_nat66_router.html", null ],
    [ "excluded", "md__home_john_networking_design_topology1_excluded.html", null ],
    [ "Topology 1 Journal", "md__home_john_networking_design_topology1_topology1_journal.html", [
      [ "Propietary Software Requirements", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md28", [
        [ "Cisco IOS", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md29", null ]
      ] ],
      [ "Topology Summary", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md30", null ],
      [ "Topology Data", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md31", [
        [ "Container Pulls", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md32", null ],
        [ "All Container Config", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md33", null ],
        [ "ISP IPv4 Contract", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md34", null ],
        [ "Loopbacks IPv4 192.168.2.0/26", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md35", null ],
        [ "Links IPv4 Starting at 192.168.2.64", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md36", [
          [ "(.64 to .127) subnetted /31", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md37", null ]
        ] ],
        [ "Vlans & IPv4", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md38", [
          [ "vlan 10 sales", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md39", null ],
          [ "vlan 20 guest", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md40", null ],
          [ "vlan 30 management", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md41", null ],
          [ "vlan 40 supervisor", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md42", null ],
          [ "vlan 60 guest-services", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md43", null ],
          [ "vlan 70 internal-services", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md44", null ],
          [ "vlan 80 accounting", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md45", null ]
        ] ],
        [ "IPv4 DHCP pools", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md46", [
          [ "Main Site:", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md47", null ],
          [ "Outreach Site:", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md48", null ]
        ] ],
        [ "IPv6", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md49", [
          [ "Native Vlan is 933", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md50", null ],
          [ "Site 1 - Vlan 10 - sales", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md51", null ],
          [ "Site 1 - Vlan 20 - guest", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md52", null ],
          [ "Site 1 - Vlan 30 - management", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md53", null ],
          [ "Site 1 - Vlan 40 - supervisor", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md54", null ],
          [ "Site 1 - Vlan 50 - voice", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md55", null ],
          [ "Site 1 - Vlan 60 - guest services", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md56", null ],
          [ "Site 1 - Vlan 70 - internal services", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md57", null ],
          [ "Site 1 - Vlan 80 - accounting", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md58", null ],
          [ "Site 2 - Vlan 10", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md59", null ],
          [ "Site 2 - Vlan 20", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md60", null ],
          [ "Site 2 - Vlan 30", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md61", null ],
          [ "Site 2 - Vlan 40", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md62", null ]
        ] ],
        [ "ISP Simulation", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md63", null ],
        [ "Topology Diagram (Draft)", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md64", null ]
      ] ],
      [ "Etherchannel", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md65", null ],
      [ "VLANs", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md73", null ],
      [ "STP", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md84", null ],
      [ "IPv4", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md89", null ],
      [ "First Hop Redundancy - HSRP", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md101", null ],
      [ "OSPF", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md105", null ],
      [ "Cisco DHCP (Non-Redundant)", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md111", null ],
      [ "NAT + WAN ACL", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md115", null ],
      [ "VPN - IPSec - PSK", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md120", null ],
      [ "Vlan Access Control (incomplete)", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md124", [
        [ "Main Site", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md125", [
          [ "Vlan 10 Main", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md126", null ],
          [ "Vlan 20 Main", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md127", null ],
          [ "Vlan 30 Main", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md128", null ],
          [ "Vlan 40 Main", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md129", null ],
          [ "web_server_access", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md130", null ],
          [ "dns_server_access", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md131", null ],
          [ "aaa_server_access", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md132", null ],
          [ "management_server_access", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md133", null ]
        ] ]
      ] ],
      [ "Switch Security", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md134", null ],
      [ "OSPF Inter-Site", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md142", null ],
      [ "NTP", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md146", null ],
      [ "IPv6 Addressing + HSRP v2", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md150", null ],
      [ "IPv6 Static routes", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md161", null ],
      [ "SSH", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md172", null ],
      [ "Ansible Example", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md175", null ],
      [ "IPv6 ACL", "md__home_john_networking_design_topology1_topology1_journal.html#autotoc_md178", null ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"index.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';