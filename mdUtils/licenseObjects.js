const licenseObject = [
  {
    name: "MIT", 
    url: "https://choosealicense.com/licenses/mit/",
    content: `Copyright <YEAR> <COPYRIGHT HOLDER>
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  },

  {
    name: "Apache",
    url: "https://choosealicense.com/licenses/apache-2.0/",
    content: `Copyright [yyyy] [name of copyright owner]
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  },

  {
    name: "GPLv2",
    url: "https://choosealicense.com/licenses/gpl-2.0/",
    content: `GNU GENERAL PUBLIC LICENSE
    Version 2, June 1991
    Copyright (C) 1989, 1991 Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.

              Preamble

    The licenses for most software are designed to take away your
    freedom to share and change it.  By contrast, the GNU General Public
    License is intended to guarantee your freedom to share and change free
    software--to make sure the software is free for all its users.  This
    General Public License applies to most of the Free Software
    Foundation's software and to any other program whose authors commit to
    using it.  (Some other Free Software Foundation software is covered by
    the GNU Lesser General Public License instead.)  You can apply it to
    your programs, too.

    When we speak of free software, we are referring to freedom, not
    price.  Our General Public Licenses are designed to make sure that you
    have the freedom to distribute copies of free software (and charge for
    this service if you wish), that you receive source code or can get it
    if you want it, that you can change the software or use pieces of it
    in new free programs; and that you know you can do these things.

    To protect your rights, we need to make restrictions that forbid
    anyone to deny you these rights or to ask you to surrender the rights.
    These restrictions translate to certain responsibilities for you if you
    distribute copies of the software, or if you modify it.`
  },

  {
    name: "GPLv3",
    url: "https://choosealicense.com/licenses/gpl-3.0/",
    content: `GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007
    Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.

            Preamble

    The GNU General Public License is a free, copyleft license for
    software and other kinds of works.

    The licenses for most software and other practical works are designed
    to take away your freedom to share and change the works.  By contrast,
    the GNU General Public License is intended to guarantee your freedom to
    share and change all versions of a program--to make sure it remains free
    software for all its users.  We, the Free Software Foundation, use the
    GNU General Public License for most of our software; it applies also to
    any other work released this way by its authors.  You can apply it to
    your programs, too.

    When we speak of free software, we are referring to freedom, not
    price.  Our General Public Licenses are designed to make sure that you
    have the freedom to distribute copies of free software (and charge for
    them if you wish), that you receive source code or can get it if you
    want it, that you can change the software or use pieces of it in new
    free programs, and that you know you can do these things.

    To protect your rights, we need to prevent others from denying you
    these rights or asking you to surrender the rights.  Therefore, you have
    certain responsibilities if you distribute copies of the software, or if
    you modify it: responsibilities to respect the freedom of others.

    For example, if you distribute copies of such a program, whether
    gratis or for a fee, you must pass on to the recipients the same
    freedoms that you received.  You must make sure that they, too, receive
    or can get the source code.  And you must show them these terms so they
    know their rights.
    `
    },

    {
      name: "AGPLv3",
      url: "https://choosealicense.com/licenses/agpl-3.0/",
      content: `GNU AFFERO GENERAL PUBLIC LICENSE
      Version 3, 19 November 2007
      Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.

                Preamble

      The GNU Affero General Public License is a free, copyleft license for
      software and other kinds of works, specifically designed to ensure
      cooperation with the community in the case of network server software.

      The licenses for most software and other practical works are designed
      to take away your freedom to share and change the works.  By contrast,
      our General Public Licenses are intended to guarantee your freedom to
      share and change all versions of a program--to make sure it remains free
      software for all its users.

      When we speak of free software, we are referring to freedom, not
      price.  Our General Public Licenses are designed to make sure that you
      have the freedom to distribute copies of free software (and charge for
      them if you wish), that you receive source code or can get it if you
      want it, that you can change the software or use pieces of it in new
      free programs, and that you know you can do these things.

      Developers that use our General Public Licenses protect your rights
      with two steps: (1) assert copyright on the software, and (2) offer
      you this License which gives you legal permission to copy, distribute
      and/or modify the software.

      A secondary benefit of defending all users' freedom is that
      improvements made in alternate versions of the program, if they
      receive widespread use, become available for other developers to
      incorporate.  Many developers of free software are heartened and
      encouraged by the resulting cooperation.  However, in the case of
      software used on network servers, this result may fail to come about.
      The GNU General Public License permits making a modified version and
      letting the public access it on a server without ever releasing its
      source code to the public.`
    },

    {
      name: "AFLv3",
      url: "https://choosealicense.com/licenses/afl-3.0/",
      content: `Academic Free License ("AFL") v. 3.0
      This Academic Free License (the "License") applies to any original work of
      authorship (the "Original Work") whose owner (the "Licensor") has placed the
      following licensing notice adjacent to the copyright notice for the Original
      Work:
      
           Licensed under the Academic Free License version 3.0
      
      1) Grant of Copyright License. Licensor grants You a worldwide, royalty-free,
      non-exclusive, sublicensable license, for the duration of the copyright, to do
      the following:
      
           a) to reproduce the Original Work in copies, either alone or as part of a
           collective work;
      
           b) to translate, adapt, alter, transform, modify, or arrange the Original
           Work, thereby creating derivative works ("Derivative Works") based upon
           the Original Work;
      
           c) to distribute or communicate copies of the Original Work and
           Derivative Works to the public, under any license of your choice that
           does not contradict the terms and conditions, including Licensor's
           reserved rights and remedies, in this Academic Free License;
      
           d) to perform the Original Work publicly; and
      
           e) to display the Original Work publicly.
      
      2) Grant of Patent License. Licensor grants You a worldwide, royalty-free,
      non-exclusive, sublicensable license, under patent claims owned or controlled
      by the Licensor that are embodied in the Original Work as furnished by the
      Licensor, for the duration of the patents, to make, use, sell, offer for sale,
      have made, and import the Original Work and Derivative Works.`
    },

    {
      name: "CC",
      url: "https://choosealicense.com/licenses/cc0-1.0/",
      content: `Creative Commons Legal Code
      CC0 1.0 Universal
      
      CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
      LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
      ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
      INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
      REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
      PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
      THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
      HEREUNDER.
  
      Statement of Purpose
      
      The laws of most jurisdictions throughout the world automatically confer
      exclusive Copyright and Related Rights (defined below) upon the creator
      and subsequent owner(s) (each and all, an "owner") of an original work of
      authorship and/or a database (each, a "Work").
      
      Certain owners wish to permanently relinquish those rights to a Work for
      the purpose of contributing to a commons of creative, cultural and
      scientific works ("Commons") that the public can reliably and without fear
      of later claims of infringement build upon, modify, incorporate in other
      works, reuse and redistribute as freely as possible in any form whatsoever
      and for any purposes, including without limitation commercial purposes.
      These owners may contribute to the Commons to promote the ideal of a free
      culture and the further production of creative, cultural and scientific
      works, or to gain reputation or greater distribution for their Work in
      part through the use and efforts of others.
      
      For these and/or other purposes and motivations, and without any
      expectation of additional consideration or compensation, the person
      associating CC0 with a Work (the "Affirmer"), to the extent that he or she
      is an owner of Copyright and Related Rights in the Work, voluntarily
      elects to apply CC0 to the Work and publicly distribute the Work under its
      terms, with knowledge of his or her Copyright and Related Rights in the
      Work and the meaning and intended legal effect of CC0 on those rights.`
    },

    {
      name: "Unlicense",
      url: "https://choosealicense.com/licenses/unlicense/",
      content: `This is free and unencumbered software released into the public domain.
      Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.
      
      In jurisdictions that recognize copyright laws, the author or authors
      of this software dedicate any and all copyright interest in the
      software to the public domain. We make this dedication for the benefit
      of the public at large and to the detriment of our heirs and
      successors. We intend this dedication to be an overt act of
      relinquishment in perpetuity of all present and future rights to this
      software under copyright law.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.
      
      For more information, please refer to <https://unlicense.org>`
    },

    {
      name: "WTFPL",
      url: "https://choosealicense.com/licenses/wtfpl/",
      content: `DO WHAT THE F*CK YOU WANT TO PUBLIC LICENSE
      Version 2, December 2004
      Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

      Everyone is permitted to copy and distribute verbatim or modified
      copies of this license document, and changing it is allowed as long
      as the name is changed.

      DO WHAT THE F*CK YOU WANT TO PUBLIC LICENSE
      TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

      0. You just DO WHAT THE F*UCK YOU WANT TO.`
    },

    {
      name: "ECLv2",
      url:"https://choosealicense.com/licenses/ecl-2.0/",
      content: `Educational Community License
      Version 2.0, April 2007
      
      http://opensource.org/licenses/ECL-2.0
      
      The Educational Community License version 2.0 ("ECL") consists of the Apache
      2.0 license, modified to change the scope of the patent grant in section 3 to
      be specific to the needs of the education communities using this license. The
      original Apache 2.0 license can be found at:
      http://www.apache.org/licenses/LICENSE-2.0
      
      TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
      
      1. Definitions.
      
      "License" shall mean the terms and conditions for use, reproduction, and
      distribution as defined by Sections 1 through 9 of this document.
      
      "Licensor" shall mean the copyright owner or entity authorized by the
      copyright owner that is granting the License.
      
      "Legal Entity" shall mean the union of the acting entity and all other
      entities that control, are controlled by, or are under common control with
      that entity. For the purposes of this definition, "control" means (i) the
      power, direct or indirect, to cause the direction or management of such
      entity, whether by contract or otherwise, or (ii) ownership of fifty percent
      (50%) or more of the outstanding shares, or (iii) beneficial ownership of such
      entity.
      
      "You" (or "Your") shall mean an individual or Legal Entity exercising
      permissions granted by this License.`
    },

    

   ]

  module.exports = licenseObject