const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-foreground font-bold">
            关于<span className="text-primary">咖钛智慧</span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-tech-blue-light to-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              咖钛智慧是一家专注于宠物健康与行为数据智能分析的技术公司，团队成员来自人工智能、宠物医疗与互联网行业。
            </p>
            <p className="text-lg leading-relaxed">
              我们相信，数据与算法可以帮助宠物行业提供更科学、更可持续的健康服务，让每一只宠物被更好地理解与照顾。
            </p>
            <div className="pt-6 border-t border-border">
              <p className="text-lg font-semibold text-primary">
                我们不与客户争夺 C 端用户，而是成为您在宠物数据智能领域的长期技术伙伴。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
