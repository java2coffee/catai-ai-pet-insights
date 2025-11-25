import { Shield, Stethoscope, Apple, Watch, Building2 } from "lucide-react";

const Clients = () => {
  const clientTypes = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "宠物保险公司",
      description: "用于精细化定价、理赔风险评估、健康干预计划设计",
    },
    {
      icon: <Stethoscope className="w-10 h-10" />,
      title: "宠物医院与诊疗连锁机构",
      description: "为慢病管理、术后康复、远程随访提供行为数据支持",
    },
    {
      icon: <Apple className="w-10 h-10" />,
      title: "宠物食品与营养品牌",
      description: "基于长期行为与健康数据，验证营养方案效果，打造证据驱动的产品卖点",
    },
    {
      icon: <Watch className="w-10 h-10" />,
      title: "宠物智能硬件厂商",
      description: "为项圈、胸背带、智能窝等硬件提供运动、睡眠和异常行为识别算法及云端分析能力",
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "宠物平台型企业 / 互联网公司",
      description: "构建宠物健康数据中台，整合多源数据，支撑增值服务",
    },
  ];

  return (
    <section id="clients" className="section-container bg-white">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-foreground font-bold">
          适用客户：为宠物业务打造<span className="text-primary">数据中枢</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          咖钛智慧并不直接面向宠物主人销售产品，而是以技术方案的形式，帮助各类宠物业务参与方提升产品力与服务体验。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clientTypes.map((client, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border card-hover group"
          >
            <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              {client.icon}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">{client.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{client.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
