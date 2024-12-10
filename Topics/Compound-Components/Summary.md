**Compound Components** tasarım kalıbı, birbirleriyle ilişkili bileşenlerin bir arada kullanılmasını ve aralarındaki ilişkinin daha açık bir şekilde ifade edilmesini sağlar. Bu kalıp, genellikle bir bütünün parçalarının bir arada daha anlamlı bir şekilde işlev görmesini sağlayarak, karmaşık bileşen gruplarının yönetimini kolaylaştırır. React'te, bu bileşenler arası iletişim genellikle Context API aracılığıyla sağlanabilir, bu da bileşenler arasında prop drilling'e gerek kalmadan veri akışı sağlar.

### Compound Components Kullanım Amaçları

1. **Esneklik**: Bileşenler, farklı şekillerde bir araya getirilerek farklı kullanım senaryolarına uyum sağlayabilir.
2. **Yeniden Kullanılabilirlik**: İlişkili bileşenler tek başlarına veya bir grup olarak kullanılabilir, bu da tekrar kullanılabilirlikleri artırır.
3. **Anlaşılırlık**: Bileşenlerin nasıl bir arada kullanılacağı daha açık hale gelir, bu da kodun bakımını ve gelecekteki geliştirmelerini kolaylaştırır.

### Context API ile Compound Components Örneği

Aşağıda, basit bir `Tabs` bileşeni üzerinden Compound Components ve Context API kullanımını gösteren bir örnek verilmiştir. Bu örnekte, `Tabs`, `TabList` ve `Tab` bileşenleri bir arada kullanılır ve `TabsContext` aracılığıyla ilişkili verileri paylaşır:

```jsx
import React, { useState, createContext, useContext } from "react";

// Context oluşturma
const TabsContext = createContext();

function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Context değerini sağlayarak bileşenleri sarmalayın
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);

  // TabList, Tab bileşenlerini render eder ve onClick ile aktif tabı günceller
  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: index === activeIndex,
          onActivate: () => setActiveIndex(index),
        })
      )}
    </div>
  );
}

function Tab({ isActive, onActivate, children }) {
  // Aktif tab'a göre stil uygulama
  return (
    <button
      style={{ fontWeight: isActive ? "bold" : "normal" }}
      onClick={onActivate}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Home</Tab>
        <Tab>About</Tab>
        <Tab>Contact</Tab>
      </TabList>
    </Tabs>
  );
}

export default App;
```

### Bu Örneğin Avantajları

- **Esneklik**: `Tabs`, `TabList`, ve `Tab` bileşenleri birbirinden bağımsız olarak geliştirilebilir ve yine de birlikte sorunsuz bir şekilde çalışır.
- **Kolay Genişletilebilirlik**: Yeni tablar veya ek özellikler, mevcut sistem üzerine kolayca eklenebilir.
- **Merkezi Durum Yönetimi**: Tüm tab durumu `Tabs` bileşeninde merkezi olarak yönetilir ve Context API aracılığıyla ilişkili bileşenlere dağıtılır.

### Dezavantajları

- **Bağımlılık**: Bileşenler, `TabsContext`'e bağımlı hale gelir, bu da bazı durumlarda sınırlayıcı olabilir.
- **Karmaşıklık**: Context API ve `React.cloneElement` gibi React özelliklerinin kullanımı, başlangıçta karmaşık gelebilir.

Compound Components modeli, özellikle büyük ve modüler uygulamalar için kod organizasyonunu ve bileşenler arası iletişimi kolaylaştırırken, Context API ile birleştirildiğinde, uygulamanın genelinde veri akışını yönetme yeteneğini artırır. Bu yaklaşım, uygulama mimarisini daha anlaşılır, yönetilebilir ve ölçeklenebilir hale getirir.
