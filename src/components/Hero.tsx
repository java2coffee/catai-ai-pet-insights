import { ArrowRight, Brain, TrendingUp, FileBarChart } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI 行为分析",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "健康风险预测",
    },
    {
      icon: <FileBarChart className="w-8 h-8" />,
      title: "个性化洞察报告",
    },
  ];

  return (
    <section id="overview" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue-light via-background to-white -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] -z-10" />
      
      <div className="section-container w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Main heading */}
          <h1 className="text-foreground font-bold leading-tight">
            基于宠物行为数据的
            <br />
            <span className="text-primary">健康洞察解决方案</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            咖钛智慧专注为宠物行业企业提供 AI 驱动的健康洞察与风险管理能力。
            <br />
            我们不生产面向消费者的终端设备或 App，而是为您的品牌、硬件与服务提供底层技术支持。
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            通过整合宠物可穿戴设备数据、医疗数据与行为数据，咖钛智慧为保险公司、宠物医疗机构、宠物食品与营养品牌以及智能硬件厂商提供高价值的健康洞察与预测能力，帮助您打造差异化的宠物健康服务。
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-tech-blue-dark text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contact">
                与我们洽谈合作
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
