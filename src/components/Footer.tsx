const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="section-container">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold mb-6">咖钛智慧</div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-200">
            <a href="#overview" className="hover:text-primary transition-colors">解决方案概览</a>
            <a href="#clients" className="hover:text-primary transition-colors">适用客户</a>
            <a href="#capabilities" className="hover:text-primary transition-colors">核心能力</a>
            <a href="#scenarios" className="hover:text-primary transition-colors">应用场景</a>
            <a href="#process" className="hover:text-primary transition-colors">合作流程</a>
            <a href="#about" className="hover:text-primary transition-colors">关于我们</a>
            <a href="#contact" className="hover:text-primary transition-colors">联系我们</a>
          </div>

          <div className="pt-8 mt-8 border-t border-neutral-700 space-y-2">
            <p className="text-sm text-neutral-300">
              版权所有 © {currentYear} 咖钛智慧
            </p>
            <p className="text-sm text-neutral-400">
              {/* 请在此处替换为您的真实ICP备案号 */}
              沪ICP备00000000号
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
