<style>
  /* 图片徽标 */
  img {
      width: 250px;
      height: 150px;
  }
  .badge {
    display: none;
    position: absolute;
    top: -40px; 
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 10px;
  }
  .original-size {
    width: auto;
    height: auto;
  }
  /* 文字徽标 */
  .badge-container {
  display: flex;
  align-items: flex-start; /* 将垂直对齐方式改为顶部对齐 */
  }

  .badge-container .badge_alone {
    flex: 0 0 auto; /* 不要让徽标的宽度自动调整 */
  }

  .content-wrapper {
    flex: 1; /* 填充剩余的空间 */
  }

  .badge_alone {
    width: 80px;
    height: auto;
    padding: 0.3em 0.1em;
    font-size: 1em;
    font-weight: bold;
    color: white;
    background-color: #007bff;
    /* background-color: auto; */
    border-radius: 0.25em;
    text-decoration: none;
    text-align: center;
  }
  .paper-box-text{
    margin-left: 20px;/* 左边栏和右边栏之间的间距 */
    /* margin-top: 30px; 可以根据需要调整上边距 */
  }
  .custom-link {
    color: white;
    text-decoration: none;
  }
  .custom-link:hover {
    color: white;
  }
    /* 以下是用于显示Abstract的内容 */
  .hidden {
    display: none;
  }
  .abstractContent {
    border: 1px dashed #000; /* 设置虚线边框，#000 是黑色 */
    padding: 10px; /* 可以根据需要调整内边距 */
    margin-top: 10px; /* 可以根据需要调整上边距 */
    margin-left: 20px;/* 左边栏和右边栏之间的间距 */
    width: auto; /* 设置固定宽度，可以根据需要调整 */
  }
  .toggleButton {
    display: inline-block;/* 或者 inline, block, inline-block, 等等 */
    margin-left: 20px;/* 左边栏和右边栏之间的间距 */
    margin-bottom: 20px;/* 下边的间距 */
    width: 70px; /* 设置固定宽度，可以根据需要调整 */
  }
  /* 分为两列 */
  .content-wrapper {
  display: flex;
  flex-direction: column;
}

</style>

<div class="badge-container">
  <div class="badge_alone">
    <a href="https://sigmobile.org/mobicom/2023/accepted.html" target="_blank"  class="custom-link">TMC'23</a>
  </div>
<div class="content-wrapper"> <!-- 新增的包裹层 -->
  <div class='paper-box-text' markdown="1">[Fast Packet Loss Inferring via Personalized Simulation-Reality Distillation](https://ieeexplore.ieee.org/abstract/document/10138917?casa_token=y8s7T1JqJmgAAAAA:A00d3DOaD0es1lS3I4uXfukHT1IInBTFOSVzNo4T898_E9L9oSlsJZsgUNYZd6cDFHNuAvHHIA), **W. Xu**, H. Wan, H. Wang, N. Cheng, Q. Chen, H. Zhou, S. Guo, **IEEE Transactions on Mobile Computing** 2023
  </div>
<button class="toggleButton">Abstract</button><div class="abstractContent hidden">Packet loss inferring can enable a transceiver to distinguish between channel impairment and collision for transmission failures, and thus can improve the network performance by exclusively performing rate adaptation or adjusting the medium access parameter. Machine learning methods from literature have shown great potential in producing models that can detect the loss causes over various network trace, however haven't considered accurate data-driven loss inferring on resource-constrained devices that cannot accommodate deep models. In this paper, we propose a novel packet loss inferring framework that can train lightweight models to distinguish between channel losses and collisions by learning the data trace from both simulation and real devices. Specifically, we first train a sophisticated teacher model based on extensive simulation datasets, whose knowledge is then transferred to a small student model that can be deployed on tiny device. The simulation-reality distillation is conducted via personalized trace from each client correspondingly, whose performance bound is analytically guaranteed. We have implemented our method on real testbed and show that the network access performance can be significantly improved, especially for sudden network variations.</div>
<script src="./assets/js/toggle.js"></script>
</div>
</div>

<div class="badge-container">
  <div class="badge_alone">
    <a href="https://sigmobile.org/mobicom/2023/accepted.html" target="_blank"  class="custom-link">TMC'23</a>
  </div>
<div class="content-wrapper"> <!-- 新增的包裹层 -->
  <div class='paper-box-text' markdown="1">[Mobile Collaborative Learning over Opportunistic Internet of Vehicles](https://ieeexplore.ieee.org/document/10119206), **W. Xu**, H. Wang, Z. Lu, C. Hua, N. Cheng, S. Guo, **IEEE Transactions on Mobile Computing** 2023
  </div>
<button class="toggleButton">Abstract</button><div class="abstractContent hidden">Machine learning models are widely applied for vehicular applications, which are essential to future intelligent transportation system (ITS). Traditional model training methods commonly employ a client-server architecture to perform local training and global iterative aggregations, which can consume significant bandwidth resources that are often absent in vehicular networks, especially in high vehicle density scenarios. Modern vehicle users naturally can collaboratively train machine learning models as they are the data owner and have strong local computing power from the onboard units (OBU). In this paper, we propose a novel collaborative learning scheme for mobile vehicles that can utilize the opportunistic vehicle-to-roadside (V2R) communication to exploit the common priors of vehicular data without interaction with a centralized coordinator. Specifically, vehicles perform local training during the driving journey, and simply upload its local model to roadside unit (RSU) encountered on the way. RSU's model will be updated accordingly and sent back to the vehicle via the V2R communication. We have theoretically shown that RSUs' models can eventually converge without a backhaul connection. Extensive experiments upon various road configurations demonstrate that the proposed scheme can efficiently train models among vehicles without dedicated Internet access and scale well with both the road range and vehicle density.</div>
<script src="./assets/js/toggle.js"></script>
</div>
</div>

<div class="badge-container">
  <div class="badge_alone">
    <a href="https://www.ieee-jas.net/" target="_blank"  class="custom-link">JAS'17</a>
  </div>
<div class="content-wrapper"> <!-- 新增的包裹层 -->
  <div class='paper-box-text' markdown="1">[Internet of vehicles in big data era](https://ieeexplore.ieee.org/abstract/document/8232587), **W. Xu**, H. Zhou, N. Cheng, F. Lyu, W. Shi, J. Chen, X. Shen **IEEE/CAA Journal of Automatica Sinica (Highly cited paper)** 2017
  </div>
<button class="toggleButton">Abstract</button><div class="abstractContent hidden">As the rapid development of automotive telematics, modern vehicles are expected to be connected through heterogeneous radio access technologies and are able to exchange massive information with their surrounding environment. By significantly expanding the network scale and conducting both real time and long term information processing, the traditional Vehicular Ad-Hoc Networks (VANETs) are evolving to the Internet of Vehicles (IoV), which promises efficient and intelligent prospect for the future transportation system. On the other hand, vehicles are not only consuming but also generating a huge amount and enormous types of data, which are referred to as Big Data. In this article, we first investigate the relationship between IoV and big data in vehicular environment, mainly on how IoV supports the transmission, storage, computing of the big data, and in return how IoV benefits from big data in terms of IoV characterization, performance evaluation and big data assisted communication protocol design. We then investigate the application of IoV big data for autonomous vehicles. Finally the emerging issues of the big data enabled IoV are discussed.</div>
<script src="./assets/js/toggle.js"></script>
</div>
</div>

<div class="badge-container">
  <div class="badge_alone">
    <a href="https://cvpr2023.thecvf.com/Conferences/2023" target="_blank"  class="custom-link">CVPR'23</a>
  </div>
<div class="content-wrapper"> <!-- 新增的包裹层 -->
  <div class='paper-box-text' markdown="1">[PMR: Prototypical Modal Rebalance for Multimodal Learning](https://openaccess.thecvf.com/content/CVPR2023/html/Fan_PMR_Prototypical_Modal_Rebalance_for_Multimodal_Learning_CVPR_2023_paper.html), Y. Fan, **W. Xu** H. Wang, J. Wang, S. Guo, **CVPR** 2023
  </div>
<button class="toggleButton">Abstract</button><div class="abstractContent hidden">Multimodal learning (MML) aims to jointly exploit the common priors of different modalities to compensate for their inherent limitations. However, existing MML methods often optimize a uniform objective for different modalities, leading to the notorious "modality imbalance" problem and counterproductive MML performance. To address the problem, some existing methods modulate the learning pace based on the fused modality, which is dominated by the better modality and eventually results in a limited improvement on the worse modal. To better exploit the features of multimodal, we propose Prototypical Modality Rebalance (PMR) to perform stimulation on the particular slow-learning modality without interference from other modalities. Specifically, we introduce the prototypes that represent general features for each class, to build the non-parametric classifiers for uni-modal performance evaluation. Then, we try to accelerate the slow-learning modality by enhancing its clustering toward prototypes. Furthermore, to alleviate the suppression from the dominant modality, we introduce a prototype-based entropy regularization term during the early training stage to prevent premature convergence. Besides, our method only relies on the representations of each modality and without restrictions from model structures and fusion methods, making it with great application potential for various scenarios. The source code is available here.
</div>
<script src="./assets/js/toggle.js"></script>
</div>
</div>


<div class="badge-container">
  <div class="badge_alone">
    <a href="https://cvpr2023.thecvf.com/Conferences/2023" target="_blank"  class="custom-link">CVPR'23</a>
  </div>
<div class="content-wrapper">
  <div class='paper-box-text' markdown="1">[DaFKD: Domain-aware Federated Knowledge Distillation](https://openaccess.thecvf.com/content/CVPR2023/html/Wang_DaFKD_Domain-Aware_Federated_Knowledge_Distillation_CVPR_2023_paper.html), H. Wang, Y. Li, **W. Xu**, R. Li, Y. Zhan, Z. Zeng, **CVPR** 2023
  </div>
<button class="toggleButton">Abstract</button><div class="abstractContent hidden">Federated Distillation (FD) has recently attracted increasing attention for its efficiency in aggregating multiple diverse local models trained from statistically heterogeneous data of distributed clients. Existing FD methods generally treat these models equally by merely computing the average of their output soft predictions for some given input distillation sample, which does not take the diversity across all local models into account, thus leading to degraded performance of the aggregated model, especially when some local models learn little knowledge about the sample. In this paper, we propose a new perspective that treats the local data in each client as a specific domain and design a novel domain knowledge aware federated distillation method, dubbed DaFKD, that can discern the importance of each model to the distillation sample, and thus is able to optimize the ensemble of soft predictions from diverse models. Specifically, we employ a domain discriminator for each client, which is trained to identify the correlation factor between the sample and the corresponding domain. Then, to facilitate the training of the domain discriminator while saving communication costs, we propose sharing its partial parameters with the classification model. Extensive experiments on various datasets and settings show that the proposed method can improve the model accuracy by up to 6.02% compared to state-of-the-art baselines.
</div>
<script src="./assets/js/toggle.js"></script>
</div>
</div>