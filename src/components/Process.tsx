import { MessageCircle, FileText, FlaskConical, Settings, Rocket, RefreshCw } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "需求沟通",
      description: "了解您的业务场景与数据基础",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "方案设计",
      description: "联合制定技术方案与集成方式",
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "小规模试点",
      description: "在部分客群或单一产品线上进行验证",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "模型优化",
      description: "基于试点数据持续调整模型和策略",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "全面上线",
      description: "与现有系统对接，形成稳定的生产环境",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "持续运营支持",
      description: "定期复盘指标，迭代算法与报表",
    },
  ];

  return (
    <section id="process" className="section-container gradient-bg">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-foreground font-bold">合作流程</h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-transparent -ml-4 z-0" />
              )}
              
              <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary text-white rounded-xl w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-primary mb-2">{step.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
