---
layout: post
title:  "jenkins-plugin-script-security sandbox bypass"
date:   2017-08-07
description: "Jenkins script security plugin sandbox bypass."
has_mathjax: False
---

While I was working as a Devops engineer on a platform team I got to spend a lot of time with
the Jenkins build server, so much time that I once found a couple of security holes in it. There
is a plugin, jenkins-plugin-script-security, which tries to restrict which operations can be 
performed by Groovy scripts running in Jenkins jobs, but it failed to check some of the more 
esoteric Groovy language features.

Sadly Jenkins don't provide any financial incentive for these reports, but I did get a mug and a 
T-Shirt.

* [First Jenkins advisory](https://www.jenkins.io/security/advisory/2017-07-10/)
* [Second Jenkins advisory](https://www.jenkins.io/security/advisory/2017-08-07/)
* [My CVE](https://access.redhat.com/security/cve/CVE-2017-1000096)
