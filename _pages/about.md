---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}
<!-- {% assign gs_data = site.google-scholar-stats.gs_data.json %}
Total Google Scholar Citations: {{ gs_data.citedby }} -->
<script>
  fetch('{{ url }}')
    .then(response => response.json())
    .then(data => {
      var citedBy = data.message;
      // 在这里可以使用 citedBy 变量，它包含了被引用次数
      console.log("被引用次数:", citedBy);
      document.getElementById('total_cit').innerHTML = citedBy;
    });
</script>

<span class='anchor' id='about-me'></span>

I am currently a research assistant professor with [Department of Computing](https://www.polyu.edu.hk/comp/) in [the Hong Kong Polytechnic University](https://www.polyu.edu.hk/comp/people/academic-staff/dr-xu-wenchao/). My research areas include **mobile computing**, **AI enabled networking**, **multimodal learning**, **Internet of things**. I have published 90+ papers at the top international journal and conferences with total <a href='https://scholar.google.com/citations?user=xaTK57QAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations" class="original-size"></a>. 

I received B.E. and M.E. degrees from Zhejiang University, Hangzhou, China, supervised by Professor Aiping Huang and Professor [Cunqing Hua](https://english.seiee.sjtu.edu.cn/english/detail/2130_1317.htm). I received Ph.D. degree at the Department of Electrical and Computer Engineering, University of Waterloo under the supervision of Professor [Xuemin(Sherman) Shen](https://uwaterloo.ca/scholar/sshen). 

<!-- <a href='https://scholar.google.com/citations?user=xaTK57QAAAAJ&hl=zh-CN&oi=ao'>google scholar citations <strong><span id='total_cit'></span></strong></a> -->
# 🔥 News

&nbsp;🎉🎉 We have some **open positions** for **PhD Students**, **Postdoctoral Researcher**, and **Research Assistant** to work and have fun together on multiple research projects. Drop me an email (wenchao.xu@polyu.edu.hk) with your complete CV if you are interested. Candidates with strong backgrounds are preferred. **Visiting Students/Researchers** (onsite/remote) are also welcome!



<!-- Selected Publication在这个文件./includes/selectedPub，md或者html文件 -->
# 📝 Selected Publications

{% include selectedPub.html %}


<br>

**[*Full publications*](./pub.md)**

# 🎖 Honors and Awards

- *2023* Best Paper Award, PIMRC.
- *2023* Best Demo Award Winner, ICCC.
- *2020* Nobert Wiener Review Award, IEEE/CAA.
- *2018* Best Paper Award, IEEE Globecom.
- *2018* Ontario Research & Development Challenge Fund Bell Scholarship.

# 📖 Educations

- *2014.09 - 2018.09*, Ph.D., Electrical and Computer Engineering, University of Waterloo, Canada
- *2008.09 - 2011.03*, Master of Engineering, Information and Communication Engineering, Zhejiang University, China.
- *2004.09 - 2008.06*, Bachelor of Engineering, Communications Engineering, Chu Kochen Honors College, Zhejiang University, China.

# 💻 Mentoring

- *2022.09 - now*, Fushuo Huo, Ph.D. student at PolyU, Chief supervisor
- *2022.09 - now*, Jinyu Chen, Ph.D. student at PolyU, Chief supervisor.
- *2022.09 - now*, Yunfeng Fan, Ph.D. student at PolyU, Chief supervisor.
- *2021.09 - now*, Zhaoyi Lu, Remote Ph.D. student at SJTU, Co-supervisor.
- *2021.09 - 2022.09*, Haodong Wan, Research Assistant, at PolyU, Mentoring.
- *2021.09 - 2022.05*, Hao Dong, Research Assistant, at PolyU, Mentoring.





<!-- # 废弃代码： -->

<!-- 以下是原始的左边图片、右边文献的形式 -->
<!--  style='width: 500px; height: 300px;' -->
<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE T MOBILE COMPUT 2023</div><img src='../images/TMC23-1.png'></div></div><div class='paper-box-text' markdown="1">

[Fast Packet Loss Inferring via Personalized Simulation-Reality Distillation](https://ieeexplore.ieee.org/abstract/document/10138917?casa_token=y8s7T1JqJmgAAAAA:A00d3DOaD0es1lS3I4uXfukHT1IInBTFOSVzNo4T898_E9L9oSlsJZsgUNYZd6cDFHNuAvHHIA), **W. Xu**, H. Wan, H. Wang, N. Cheng, Q. Chen, H. Zhou, S. Guo, **IEEE Transactions on Mobile Computing** 2023
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE T MOBILE COMPUT 2023</div><img src='../images/TMC23-2.png'></div></div><div class='paper-box-text' markdown="1">

[Mobile Collaborative Learning over Opportunistic Internet of Vehicles](https://ieeexplore.ieee.org/document/10119206), **W. Xu**, , H. Wang, Z. Lu, C. Hua, N. Cheng, S. Guo, **IEEE Transactions on Mobile Computing** 2023
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE-CAA J AUTOMATIC 2017</div><img src='../images/AUTOMATIC17.png'></div></div><div class='paper-box-text' markdown="1">

[Internet of vehicles in big data era](https://ieeexplore.ieee.org/abstract/document/8232587), **W. Xu**, H. Zhou, N. Cheng, F. Lyu, W. Shi, J. Chen, X. Shen **IEEE/CAA Journal of Automatica Sinica (Highly cited paper)** 2017
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2023</div><img src='../images/CVPR23-1.png'></div></div><div class='paper-box-text' markdown="1">

[PMR: Prototypical Modal Rebalance for Multimodal Learning](https://openaccess.thecvf.com/content/CVPR2023/html/Fan_PMR_Prototypical_Modal_Rebalance_for_Multimodal_Learning_CVPR_2023_paper.html), Y. Fan, **W. Xu** H. Wang, J. Wang, S. Guo, **CVPR** 2023
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2023</div><img src='../images/CVPR23-2.png'></div></div><div class='paper-box-text' markdown="1">

[DaFKD: Domain-aware Federated Knowledge Distillation](https://openaccess.thecvf.com/content/CVPR2023/html/Wang_DaFKD_Domain-Aware_Federated_Knowledge_Distillation_CVPR_2023_paper.html), H. Wang, Y. Li, **W. Xu**, R. Li, Y. Zhan, Z. Zeng, **CVPR** 2023
</div>
</div> -->
