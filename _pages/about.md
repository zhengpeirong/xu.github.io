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

I am currently a research assistant professor with [Department of Computing](https://www.polyu.edu.hk/comp/) in [the Hong Kong Polytechnic University](https://www.polyu.edu.hk/comp/people/academic-staff/dr-xu-wenchao/). My research areas include **mobile computing**, **AI enabled networking**, **multimodal learning**, **Internet of things**. I have published 80+ papers at the top international journal and conferences with total <a href='https://scholar.google.com/citations?user=xaTK57QAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations" class="original-size"></a>. 

I received my B.E. and M.E. degrees from Zhejiang University, Hangzhou, China, in 2008 and 2011, supervised by Professor Aiping Huang and Professor [Cunqing Hua](https://english.seiee.sjtu.edu.cn/english/detail/2130_1317.htm). In 2018 I received my Ph.D. degree at the Department of Electrical and Computer Engineering, University of Waterloo under the supervision of Professor [Xuemin(Sherman) Shen](https://uwaterloo.ca/scholar/sshen). 

<!-- <a href='https://scholar.google.com/citations?user=xaTK57QAAAAJ&hl=zh-CN&oi=ao'>google scholar citations <strong><span id='total_cit'></span></strong></a> -->
# 🔥 News

&nbsp;🎉🎉 We have some **open positions** for **PhD Students**, **Postdoctoral Researcher**, and **Research Assistant** to work and have fun together on multiple research projects. Drop me an email (wenchao.xu@polyu.edu.hk) with your complete CV if you are interested. Candidates with strong backgrounds are preferred. **Visiting Students/Researchers** (onsite/remote) are also welcome!



# 📝 Selected Publications
<style>
    img {
        width: 250px;
        height: 150px;
    }
    .badge {
      display: none;
      position: absolute;
      top: -40px; /* 调整这个值来控制 badge 与图片的间距 */
      left: 50%;
      transform: translateX(-50%);
      /* background-color: white; */
      padding: 5px 10px;
    }
    .original-size {
      width: auto;
      height: auto;
    }

    /* .paper-box-image {
      position: relative;
    } */
</style>


<!--  style='width: 500px; height: 300px;' -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE T MOBILE COMPUT 2023</div><img src='../images/TMC23-1.png'></div></div><div class='paper-box-text' markdown="1">

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
</div>

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

# 📝 Publications
**Publication Index: 1 Monograph, 1 Patent, 46 Journal and 33 Conference papers.**
<!-- # 📝 Publications是一个片段标识符（fragment identifier） -->
## Book
  - **W. Xu**, X. Shen, H. Zhou, “Internet Access in Vehicular Networks”, Springer, Dec, 2021

## Patent
  - X. Shen,**W. Xu**, H. Zhou, “System and Method for Automotive Wi-Fi Access and Connection”Authorized in US and China, Application number:  PCT/CA2017/051292 (US) CN110024476A (CHN)

## Journal Papers

1. L. Wu, S. Guo, Z. Hong, Y. Liu, **W. Xu**, Y. Zhan, ‘Long-term Adaptive VCG Auction Mechanism for Sustainable Federated Learning with Periodical Client Shifting’, **IEEE Transactions on Mobile Computing**, accepted

2. J. Shen, N. Cheng, X. Wang, F. Lyu, **W. Xu**, Z. Liu, K. Aldubaikhy, X. Shen, ‘RingSFL:An Adaptive Split Federated Learning Towards Taming Client Heterogeneity’, **IEEE Transactions on Mobile Computing**, accepted

3. X. Xie, C. Hua, P. Gu, **W. Xu**, ‘AirCon: Over-the-Air Consensus Protocol for Wireless Blockchain Networks’, **IEEE Transactions on Mobile Computing**, July 2023

4. **W. Xu**, H. Wan, H. Wang, N. Cheng, Q. Chen, H. Zhou, S. Guo, ‘Fast Packet Loss Inferring via Personalized Simulation-Reality Distillation’, **IEEE Transactions on Mobile Computing**, to appear

5. **W. Xu**, H. Wang, Z. Lu, C. Hua, N. Cheng, S. Guo, ‘Mobile Collaborative Learning over Opportunistic Internet of Vehicles’, **IEEE Transactions on Mobile Computing**, DOI: 10.1109/TMC.2023.3273425, May 2023

6. T. Guo, S. Guo, J. Wang, X. Tang, **W. Xu**, ‘PromptFL: Let Federated Participants Cooperatively Learn Prompts Instead of Models — Federated Learning in Age of Foundation Model’, **IEEE Transactions on Mobile Computing**, to appear

7. H. Dong, C. Hua, L. Liu, **W. Xu**, S. Guo, ‘Optimization-Driven DRL Based Joint Beamformer Design for IRS-Aided ITSN Against Smart Jamming Attacks’, **IEEE Transactions on Wireless Communications**, DOI: 10.1109/TWC.2023.3281452

8. J. Chen, **W. Xu**, P. Hu, J. Wang, K. Chen, Y. Feng, S. Guo ‘Towards Multi-user Access Fairness in Reconfigurable Intelligent Surface Assisted Wireless Networks’, **IEEE Wireless Communications Magazine**, April, 2023

9. T. Guo, S. Guo, F. Wu, **W. Xu**, J. Zhang, Q. Zhou, Q. Chen, W. Zhuang, ‘Tree Learning: Towards Promoting Coordination in Scalable Multi-Client Training Acceleration’, **IEEE Transactions on Mobile Computing**, Mar. 2023

10. W. Gu, Y. Liu, C. Wang, **W. Xu**, Y. Yu, W. Lu, H. Zhu, ‘A General 3D Geometry-Based Stochastic Channel Model for B5G mmWave IIoT’, **IEEE Internet of Things Journal**, To appear

11. H. Dong, C. Hua, L. Liu, **W. Xu**, S. Guo, R. Tafazolli, “Joint Beamformer Design and User Scheduling for Integrated Terrestrial-Satellite Networks,”, **IEEE Transactions on Wireless Communications**, Feb. 2023

12. A. Jin, **W. Xu**, S. Guo, B. Hu, L. Yeung, “PS+: A Simple yet Effective Framework for Fast Training on Parameter Server,” **IEEE Transactions on Parallel and Distributed Systems**, Aug. 2022

13. H. Dong, C. Hua, L. Liu, **W. Xu**, R. Tafazolli, “Intelligent Reflecting Surface-Aided Integrated Terrestrial-Satellite Networks,” **IEEE Transactions on Wireless Communications**, Oct. 2022

14. H. Wang, R. Li, C. Li, P. Zhou, Y. Li, **W. Xu**, S. Guo, “Gradient Scheduling with Global Momentum for Asynchronous Federated Learning in Edge Environment,” **IEEE Internet of Things Journal**, Mar. 2022

15. T. Yang, M. Qin, N. Cheng, **W. Xu**, L. Zhao “Liquid software-based edge intelligence for future 6G networks”, **IEEE Network** (2022)

16. D. Hu, J. Chen, H. Zhou, K. Yu, B. Qian, **W. Xu**, “Leveraging Blockchain for Multi-Operator Access Sharing Management in Internet of Vehicles”, **IEEE Transactions on Vehicular Technology**, Dec. 2021.

17. H. Wang, Z. Qu, Q. Zhou, H. Zhang, B. Luo, **W. Xu**, S. Guo, R. Li, “A Comprehensive Survey on Training Acceleration for Large Machine Learning Models in IoTs”, **IEEE Internet of Things Journal**, Sep. 2021.

18. M. He, C. Hua, **W. Xu**, P. Gu, X. Shen “Delay Optimal Concurrent Transmissions with Raptor Codes in Dual Connectivity Networks”, **IEEE Transactions on Network Science and Engineering** (2021)

19. H. Wu, J. Chen, C. Zhou, W. Shi, N. Cheng, **W. Xu**, W. Zhuang and X. Shen “Resource management in space-air- ground integrated vehicular networks: SDN control and AI algorithm design”, **IEEE Wireless Communications**, 27(6), pp.52-60, 2020
 
20. Z. Ke, C. Hua, P. Gu, and **W. Xu**, “User Clustering and Proactive Group Handover Scheduling in LEO Satellite Networks”, In 2020 **IEEE Computing, Communications and IoT Applications (ComComAp)**, 2020

21. X. Wang, Q. Ma, J. Li, H. Zhang, **W. Xu**, “An Improved SC Flip Decoding Algorithm of Polar Codes Based on Genetic Algorithm”, **IEEE Access**, vol. 8, 2020.

22. M. Qin, N. Cheng, Z. Jing, T. Yang, **W. Xu**, Q. Yang, RR Rao, “Service-Oriented Energy-Latency Tradeoff for IoT Task Partial Offloading in MEC-Enhanced Multi-RAT Networks”, **IEEE Internet of things journal**, August, 2020.

23. H. Zhou W. Xu, J. Che, W. Wang “Evolutionary V2X Technologies Toward Internet of Vehicles: Challenges and Opportunities”, **Proceedings of IEEE**, vol. 108, no.2 (2020), pp. 308–323. (Highly cited paper)

24. **W. Xu**, S. Guo, S. Ma, H. Zhou, M. Wu, W. Zhuang “Augmenting Drive-thru Internet via Reinforcement Learning based Rate Adaptation”, **IEEE Internet of Things Journal**, vol. 7, no.4 (2020), pp.3114–3123.

25. **W. Xu**, H. Zhou, H. Wu, F. Lyu, N. Cheng, X. Shen “Intelligent Link Adaptation in 802.11 Vehicular Networks: Challenges and Solutions”, **IEEE Communications Standards Magazine**, vol. 3, no. 1, pp. 12–18, 2019

26. **W. Xu**, W. Shi, F. Lyu, H. Zhou, N. Cheng, X. Shen “Throughput Analysis of Vehicular Internet Access via Roadside WiFi Hotspot”, **IEEE Transactions on Vehicular Technology**, vol.68, no.4, pp.3980–3991, 2019

27. **W. Xu**, H. Zhou, Y. Bi, N. Cheng, X. Shen “Exploiting hotspot-2.0 for traffic offloading in mobile networks”, **IEEE Network**, vol.32, no.5, pp.131–137, 2018

28. **W. Xu**, H. Zhou, N. Cheng, F. Lyu, W. Shi, J. Chen, X. Shen “Internet of vehicles in big data era”, **IEEE/CAA Journal of Automatica Sinica**, vol.5, no.1, pp.19–35, 2017 (Highly cited paper)

29. **W. Xu**, O. Ha, W. Zhuang, X. Shen “Delay analysis of in-vehicle Internet access via on-road WiFi access points”, **IEEE access**, vol.5, pp.2736–2746, 2017

30. L. Qian, A. Feng, N, Yu, **W. Xu**, Y. Wu, “Vehicular Networking enabled Vehicle State Prediction via Two-level Quantized Adaptive Kalman Filtering”, **IEEE Internet of Things Journal** (DOI 10.1109/JIOT.2020.2983332)

31. H. Zhou, X. Peng, B. Qian, F. Lyu, **W. Xu**, “Enabling Security-Aware D2D Spectrum Resource Sharing for Connected Autonomous Vehicles”, **IEEE Internet of Things Journal**, vol. 7, no. 5 (2020), pp.3799–3811

32. C. Hua, **W. Xu**, P. Gu, “Optimal Power Allocation for Non-orthogonal Multiple Access in Wireless Backhaul Net- works”, **IET Communications**, 2020

33. P. Gu, C. Hua, **W. Xu**, R. Khatoun, Y. Wu, A. Serhrouchni, “ Control Channel Anti-Jamming in Vehicular Networks via Cooperative Relay Beamforming”, **IEEE Internet of Things Journal**, 2020 Feb 13;7(6):5064-77.

34. H. Wu, J. Chen, **W. Xu**, N. Cheng, W. Shi, L. Wang, X. Shen “Delay-Minimized Edge Caching in Heterogeneous Vehicular Networks: A Matching-Based Approach”, **IEEE Transactions on Wireless Communication**, accepted

35. F. Lyu, N. Cheng, H. Zhu, H. Zhou, **W. Xu**, M. Li, X. Shen “Towards Rear-End Collision Avoidance: Adaptive Beaconing for Connected Vehicles”, **IEEE Transactions on Intelligent Transportation Systems**, accepted

36. F. Lyu, H. Zhu, N. Cheng, H. Zhou, **W. Xu**, M. Li, X. Shen “Characterizing Urban Vehicle-to-Vehicle Communica- tions for Reliable Safety Applications”, **IEEE Transactions on Intelligent Transportation Systems**, early access (DOI 10.1109/TITS.2019.2920813)

37. N. Cheng, **W. Xu**, W. Shi, Y. Zhou, N. Lu, H. Zhou, X. Shen “Air-ground integrated mobile edge networks: Archi- tecture, challenges, and opportunities”, **IEEE Communications Magazine**, vol.56, no.8, pp.26–32, 2018

38. W. Shi, J. Li, **W. Xu**, H. Zhou, N. Zhang, S. Zhang, X. Shen “Multiple drone-cell deployment analyses and optimization in drone assisted radio access networks”, **IEEE Access**, vol.6, pp.12518–12529, 2018

39. W. Shi, H. Zhou, J. Li, **W. Xu**, N. Zhang X. Shen “Drone assisted vehicular networks: Architecture, challenges and opportunities”, **IEEE Network**, vol.32, no.3, pp.130–137, 2018

40. F. Lyu, N. Cheng, H. Zhou, **W. Xu**, W. Shi, J. Chen, M. Li, X. Shen “DBCC: Leveraging Link Perception for Distributed Beacon Congestion Control in VANETs”, **IEEE Internet of Things Journal**, vol.5, no.6, pp.4237–4249, 2018

41. N. Cheng, F. Lyu, J. Chen, **W. Xu**, H. Zhou, S. Zhang, X. Shen “Big data driven vehicular networks”, **IEEE Network**, vol.32, no.6, pp.160–167, 2018 (Highly cited paper)

42. F. Lyu, N. Cheng, H. Zhu, H. Zhou, **W. Xu**, M. Li, X. Shen “Intelligent context-aware communication paradigm design for IOVs based on data analytics”, **IEEE Network**, vol.32, no.6, pp.74–82, 2018

43. F. Lyu, H. Zhu, H. Zhou, L. Qian, **W. Xu**, M. Li, X. Shen “MoMAC: mobility-aware and collision-avoidance MAC for safety applications in VANETs”, **IEEE Transactions on Vehicular Technology**, vol.67, no.11, pp.10590–10602, 2018
 
44. H. Zhou, **W. Xu**, Y. Bi, J. Chen, Y. Quan, X. Shen “Toward 5G spectrum sharing for immersive-experience-driven vehicular communications”, **IEEE Wireless Communications**, vol.24, no.6, pp.30–37, 2017

45. F. Lyu, H. Zhu, H. Zhou, **W. Xu**, N. Zhang, M. Li, X. Shen “SS-MAC: A novel time slot-sharing MAC for safety messages broadcasting in VANETs”, **IEEE Transactions on Vehicular Technology**, vol.67, no.4, pp.3586–3597, 2017

46. J. Chen, H. Zhou, N. Zhang, **W. Xu**, Q. Yu, L. Gui, X. Shen “Service-oriented dynamic connection management for software-defined internet of vehicles”, **IEEE Transactions on Intelligent Transportation Systems**, vol.18, no.10, pp.2826–2837, 2017

47. Y. Bi, H. Zhou, **W. Xu**, X. Shen, H. Zhao, “An efficient PMIPv6-based handoff scheme for urban vehicular networks”, **IEEE transactions on intelligent transportation systems**, vol.17, no.12, pp.3613–3628, 2016

## Conference Papers

1. **W. Xu**, H. Wan, N. Cheng, H. Zhou, M. Qin, ‘A Practical Fast Model Inference System Over Tiny Wireless Device’, accepted in 2023 International Symposium on Personal, Indoor and Mobile Radio Communications (**PIMRC**)

2. J. Zhang, X. Ma, S. Guo, **W. Xu**, ‘Towards Unbiased Training in Federated Open-world Semi-supervised Learning’, accepted in International Conference on Machine Learning (**ICML**), 2023

3. J. Li, L. Lang, Z. Zhu, H. Wang, R. Li, **W. Xu**, ‘Decompose, Then Reconstruct: A Framework of Network Structures for Click-Through Rate Prediction’, accepted to ECML/PKDD 2023

4. Q. Chen, S. Guo, **W. Xu**, J. Li, T. Shi, Z. Cai, H. Gao, ‘Optimizing Average AoI with Directional Charging for Wireless-Powered Network Edge’, accepted in The IEEE/ACM International Symposium on Quality of Service 2023 (**IWQoS 2023**)

5. H. Wang, Y. Li, **W. Xu**, R. Li, Y. Zhan, Z. Zeng, ‘DaFKD: Domain-aware Federated Knowledge Distillation’, accepted in IEEE/CVF Conference on Computer Vision and Pattern Recognition(**CVPR**) 2023

6. Y. Fan, **W. Xu**, H. Wang, J. Wang, S. Guo, ‘PMR: Prototypical Modal Rebalance for Multimodal Learning’, accepted in IEEE/CVF Conference on Computer Vision and Pattern Recognition(**CVPR**) 2023

7. J. He, N. Cheng, Z. Yin, H. Zhou, **W. Xu**, H. Peng, C. Zhou, R. Zhang, ‘Service-Oriented Resource Allocation in SDN Enabled LEO Satellite Networks’, accepted in 2023 International Symposium on Personal, Indoor and Mobile Radio Communications (**PIMRC**)

8. J. Shen, N. Cheng, Z. Yin, Y. FU, S. Guo, **W. Xu**, ‘RingSFL: An Adaptive Federated Learning System for Heteroge- neous Clients’ in IEEE/CIC International Conference on Communications in China (**ICCC**), 2023

9. Z. Lu, J. Bao, X. Xie, **W. Xu**, C. Hua, ‘Non-Inducible RF Fingerprint Hiding via Feature Perturbation’, acceted in **IEEE ICC**, 2023

10. H. Wang, **W. Xu**, Y. Fan, R. Li, P. Zhou, ‘AOCC-FL: Federated Learning with Aligned Overlapping via Calibrated Compensation’, accepted in **INFOCOM** 2023

11. Q. Chen, S. Guo, **W. Xu**, Z. Cai, L. Cheng, H. Gao, “AoI Minimization Charging at Wireless-Powered Network Edge”, In **Proc. IEEE ICDCS**, pp. 713-723, 2022

12. L. Wu, S. Guo, Y. Liu, Z. Hong, Y. Zhan, **W. Xu**, “Sustainable Federated Learning with Long-term Online VCG Auction Mechanism”, In **Proc. IEEE ICDCS**, pp. 895-90, 2022

13. Z. Ren, N. Cheng, R. Sun, X. Wang, N. Lu, **W. Xu**, “SigT: An Efficient End-To-End MIMO-OFDM Receiver Framework Based on Transformer”, accepted in **Proc. IEEE ICCSPA’22**

14. Y. Zhu, C. Hua, D. Zhong, **W. Xu**, “Design of Low-latency Overlay Protocol for Blockchain Delivery Networks”, In 2022 **IEEE Wireless Communications** and Networking Conference (**WCNC**), pp. 1182-1187, 2022.

15. X. Ma, J. Zhang, S. Guo, **W. Xu**, “Layer-wised Model Aggregation for Personalized Federated Learning”, In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (**CVPR**), pp. 10092-10101, 2022.

16. J. Zhang, S. Guo, X. Ma, H. Wang **W. Xu**, F. Wu, “Parameterized Knowledge Transfer for Personalized Federated Learning”, Advances in Neural Information Processing Systems (**NeurIPS**) 34 (2021). 

17. H. Dong, C. Hua, L. Liu, **W. Xu**, “Towards Integrated Terrestrial-Satellite Network via Intelligent Reflecting Surface”, In **ICC** 2021-IEEE International Conference on Communications, pp. 1-6. IEEE, 2021

18. **W. Xu**, H. Zhou, N. Cheng, N. Lu, L. Xu, M. Qin, S. Guo, “Autonomous Rate Control for Mobile Internet of Things: A Deep Reinforcement Learning Approach”, in **Proc. VTC-Fall** 2020,
 
19. **W. Xu**, H. Zhou, T. Yang, H. Wu, S. Guo, “Proactive Link Adaptation for Marine Internet of Things in TV White Space”, in **Proc. ICC** 2020

20. X. Yang, C. Hua, P. Gu, **W. Xu**, “Joint Power Allocation for Non-orthogonal Multiple Access in Wireless Backhaul Networks”, in **Proc. ICFC** 2020

21. Z. Xu, Y. Zhang, C. Fu, L. Liu, C. Chen, **W. Xu**, S. Guo, “Back Shape Measurement and Three-Dimensional Reconstruction of Spinal Shape Using One Kinect Sensor”, in **Proc. ISBI** 2020

22. **W. Xu**, S. Guo, H. Zhou, S. Ma, M. Wu, “A Queueing Analysis of the Opportunistic Vehicle-to-Vehicle Communica- tion’, in **Proc. Globecom** 2019

23. **W. Xu**, C. Ma, S. Guo, H. Zhou “Efficient Rate Adaptation for 802.11af TVWS Vehicular Access via Deep Learning’, in **Proc. Globecom** 2019

24. H. Cai, C. Hua, **W. Xu** “Design of Active Learning Framework for Collaborative Anomaly Detection”, in **Proc. WCSP** 2019

25. **W. Xu**, H. Wu, J. Chen, H. Zhou, N. Cheng, X. Shen, “ViFi: Vehicle-to-Vehicle Assisted Traffic Offloading via Roadside WiFi Networks”, in **Proc. Globecom** 2018, pp.1–6

26. H. Wu, **W. Xu**, J. Chen, L. Wang, X. Shen, “Matching-Based Content Caching in Heterogeneous Vehicular Networks”, in **Proc. Globecom** 2018, pp.1–6, Best Paper Award

27. J. Chen, **W. Xu**, N. Cheng, H. Wu, S. Zhang, X. Shen, “Reinforcement Learning Policy for Adaptive Edge Caching in Heterogeneous Vehicular Network”, in **Proc. Globecom** 2018, pp.1–6

28. W. Shi, J. Li, **W. Xu**, H. Zhou, N. Zhang X. Shen, “3D drone-cell deployment optimization for drone assisted radio access networks”, in **Proc. ICCC** 2017, pp.1–6

29. **W. Xu**, H. Zhou, W. Shi, F. Lyu, X. Shen, “Throughput analysis of in-vehicle internet access via on-road wifi access points”, in **Proc. VTC-Fall** 2017, , pp.1–5

30. **W. Xu**, Y. Wu, H. Zhou, Y. Bi, N. Cheng, X. Shen, “Ti-Fi: Terminal-to-terminal communication incorporated Wi-Fi offloading”, in **Proc. WCSP** 2016, pp.1–5

31. **W. Xu**, C. Hua, A. Huang, “Channel assignment and user association game in dense 802.11 wireless networks”, in **Proc. ICC** 2011, pp.1–5

32. **W. Xu**, C. Hua, A. Huang, “A game theoretical approach for load balancing user association in 802.11 wireless networks”, in **Proc. Globecom** 2010, pp.1–5

33. X. Ding, C. Hua, **W. Xu**, A. Huang, “A measurement study of channel dynamics in wireless mesh networks”, in **Proc. WCSP** 2009