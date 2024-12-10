**Composition Components** ya da **Component Composition** kavramı, React gibi bileşen tabanlı kütüphanelerde, küçük ve yeniden kullanılabilir bileşenler oluşturarak bu bileşenleri bir araya getirip daha büyük ve karmaşık kullanıcı arayüzleri oluşturmanın bir yöntemidir. Bu tasarım kalıbı, "bileşim üzerine miras" (composition over inheritance) felsefesini teşvik eder. Yani, bileşenler arasında kod tekrarını azaltmak ve bileşen hiyerarşilerini basitleştirmek için miras yerine bileşim tercih edilir.

### Component Composition'un Kullanım Amaçları

1. **Kodun Yeniden Kullanılabilirliği**: Küçük ve modüler bileşenler oluşturarak, bu bileşenlerin uygulama genelinde farklı kontekstlerde kullanılmasını sağlar.
2. **Esneklik ve Özelleştirilebilirlik**: Bileşenler arası sıkı bağlantıyı azaltır, bu da geliştiricilere herhangi bir bileşeni diğer bileşenlerle kolayca entegre etme veya özelleştirme imkanı verir.
3. **Bakım Kolaylığı**: Daha düzenli ve anlaşılır kod yapıları oluşturarak uygulamanın genelinde bakım ve güncellemeleri kolaylaştırır.

### Component Composition Nasıl Çalışır?

React'te bileşenler, props olarak diğer bileşenlere veri veya bileşenler (hatta render fonksiyonları) geçirebilir. Bu sayede, bir bileşen başka bileşenleri içerebilir veya onları belirli şekillerde özelleştirebilir. Örneğin, bir `List` bileşeni, farklı türdeki `ListItem` bileşenleri alabilir ve bu `ListItem` bileşenlerini kendi içinde render edebilir.

### React'te Component Composition Örneği

```jsx
import React from "react";

function PageLayout({ header, content, footer }) {
  return (
    <div>
      <header>{header}</header>
      <main>{content}</main>
      <footer>{footer}</footer>
    </div>
  );
}

function App() {
  return (
    <PageLayout
      header={<HeaderComponent />}
      content={<MainContent />}
      footer={<FooterComponent />}
    />
  );
}

function HeaderComponent() {
  return <div>Header Area</div>;
}

function MainContent() {
  return <div>Main Content Area</div>;
}

function FooterComponent() {
  return <div>Footer Area</div>;
}

export default App;
```

Bu örnekte, `PageLayout` bileşeni `header`, `content`, ve `footer` gibi farklı bölümleri props olarak alır ve bu bölümleri uygun yerlerde render eder. Böylece, `PageLayout` bileşeni farklı başlık, içerik ve altbilgi bileşenleriyle yeniden kullanılabilir ve özelleştirilebilir hale gelir.

### Avantajları

- **Modülerlik**: Uygulama, bağımsız çalışabilen küçük bileşenlere bölünür.
- **Özelleştirme Kolaylığı**: Üst bileşenler, alt bileşenleri değiştirmeden onları farklı şekillerde kullanabilir.
- **Karmaşık UI Yapılarını Basitleştirme**: Büyük ve karmaşık kullanıcı arayüzleri, küçük parçalar halinde yönetilebilir.

### Dezavantajları

- **Anlaşılması Zor Yapılar**: Bazen bileşenler arası ilişkiler çok katmanlı hale gelebilir ve bu, özellikle yeni geliştiriciler için karmaşık olabilir.
- **Performans Sorunları**: Aşırı bileşen iç içe geçmesi bazı durumlarda performansı olumsuz etkileyebilir.

Component Composition, React uygulamalarını organize etmek, kod tekrarını azaltmak ve bileşenler arası bağımlılıkları yönetmek için güçlü bir yöntemdir. Uygulamanın esnekliğini ve bakımını kolaylaştırarak, geniş çapta özelleştirmelere ve yeniden kullanıma olanak tanır.
