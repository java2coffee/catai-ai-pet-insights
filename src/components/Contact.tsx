import { Mail, Phone, MapPin, Building } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Building className="w-6 h-6" />,
      label: "公司名称",
      value: "咖钛智慧",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "联系邮箱",
      value: "java8coffee@163.com",
      link: "mailto:java8coffee@163.com",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "商务合作",
      value: "java8coffee@163.com",
      link: "mailto:java8coffee@163.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "联系电话",
      value: "13501101315",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "公司地址",
      value: "北京市海淀区中关村软件园2号楼",
    },
  ];

  return (
    <section id="contact" className="section-container gradient-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-foreground font-bold">联系我们</h2>
          <p className="text-lg text-muted-foreground">
            期待与您探讨合作可能
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-tech-blue-light text-primary rounded-xl w-12 h-12 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-foreground font-medium">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              我们致力于为宠物行业合作伙伴提供专业的技术支持与服务
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
