import { DollarSign, HeartPulse, Beaker, Smartphone } from "lucide-react";

const Scenarios = () => {
  const scenarios = [
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "智能保单与动态定价",
      description: "通过持续的行为与健康数据，构建更公平、更精细的宠物保险定价与续保策略。",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <HeartPulse className="w-12 h-12" />,
      title: "慢病管理与随访",
      description: "与宠物医院系统结合，为慢性病宠物提供远程监测与干预建议，提高复诊率与依从性。",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Beaker className="w-12 h-12" />,
      title: "营养方案验证与产品优化",
      description: "基于真实使用数据评估新品或配方的长期效果，为宠物食品与营养品提供数据背书。",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "硬件差异化功能升级",
      description: "为现有智能项圈、定位设备等硬件提供更智能的健康洞察功能，提升用户粘性与品牌溢价。",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="scenarios" className="section-container bg-white">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-foreground font-bold">
          应用场景：让宠物数据真正产生<span className="text-primary">业务价值</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {scenarios.map((scenario, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-card to-secondary p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${scenario.gradient} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`} />
            
            <div className="relative z-10">
              <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mb-6 text-primary shadow-md group-hover:scale-110 transition-transform duration-300">
                {scenario.icon}
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{scenario.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">{scenario.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scenarios;
