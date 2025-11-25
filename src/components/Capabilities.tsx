import { Database, Activity, AlertTriangle, BarChart3, Code, Lock } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: <Database className="w-12 h-12" />,
      title: "多源数据接入",
      description: "支持来自可穿戴设备、医院系统、问卷与用户打点的多类型数据接入与清洗。",
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "宠物行为识别模型",
      description: "利用深度学习与时间序列分析，识别宠物活动、休息、异常行为与环境变化。",
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "健康风险预测",
      description: "基于历史数据与标签，构建针对肥胖、关节问题、心血管疾病等风险的预测模型。",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "健康评分与分层",
      description: "为每只宠物生成健康画像与风险分层，支持大规模客群分析与精细化运营。",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "可视化洞察与 API 输出",
      description: "通过可视化报表与标准化 API，将关键洞察无缝嵌入到您的系统或应用中。",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "隐私与合规保障",
      description: "遵循相关数据安全与隐私保护要求，支持本地化部署与专有云部署。",
    },
  ];

  return (
    <section id="capabilities" className="section-container gradient-bg">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-foreground font-bold">
          核心能力：从数据到洞察的<span className="text-primary">全链路方案</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          咖钛智慧提供从数据采集、处理，到算法建模与可视化洞察的一体化技术方案，您可以灵活选用模块或整体集成。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 card-hover group"
          >
            <div className="bg-tech-blue-light rounded-xl w-20 h-20 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              {capability.icon}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">{capability.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
