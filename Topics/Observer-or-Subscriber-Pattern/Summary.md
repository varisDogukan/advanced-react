**Observer Pattern**, bir nesnenin durumundaki değişiklikleri izlemek için kullanılan bir tasarım kalıbıdır. Bu kalıp, bir "subject" (gözlemleme yapılan nesne) ve bir veya daha fazla "observer" (gözlemci) arasında bir ilişki kurar. Subject’in durumu değiştiğinde, tüm kayıtlı observer'lara bu değişiklik bildirilir ve bu observer'lar gerekli güncellemeleri yaparlar. Observer pattern, olay tabanlı sistemlerde veya veri durumunun birden fazla bileşen tarafından izlenmesi gerektiğinde kullanışlıdır.

### Observer Pattern Kullanım Amaçları

1. **Düşük Bağlantı (Low Coupling)**: Subject ve observers arasındaki bağımlılıkları azaltır, bu da sistemdeki bileşenlerin bağımsız olarak geliştirilip, test edilmesini kolaylaştırır.
2. **Dinamik Abonelik**: Sistem çalışırken observer'ların aboneliklerini dinamik olarak eklemeye veya çıkarmaya olanak tanır.
3. **Veri Yayını**: Bir kaynaktaki değişikliklerin birden fazla alıcıya etkin bir şekilde yayılmasını sağlar.

### React'te Observer Pattern Örneği

React'te, Observer Pattern genellikle state yönetim kütüphaneleri veya custom hooklar aracılığıyla uygulanır. Ancak basit bir observer pattern'i simüle etmek için React state'ini ve context API'yi kullanarak bir örnek verebiliriz:

```jsx
import React, { useState, useEffect, createContext, useContext } from "react";

// Observer'ların abone olacağı Context
const SubjectContext = createContext();

// Subject bileşeni
const Subject = ({ children }) => {
  const [state, setState] = useState("Initial State");

  // Durumu güncellemek için bir fonksiyon
  const updateState = (newState) => {
    setState(newState);
  };

  return (
    <SubjectContext.Provider value={{ state, updateState }}>
      {children}
    </SubjectContext.Provider>
  );
};

// Observer bileşeni
const Observer = () => {
  const { state } = useContext(SubjectContext);

  return <div>Current State: {state}</div>;
};

// Uygulama bileşeni
function App() {
  const { updateState } = useContext(SubjectContext);

  return (
    <div>
      <button onClick={() => updateState("Updated State")}>Update State</button>
      <Observer />
      <Observer />
    </div>
  );
}

export default () => (
  <Subject>
    <App />
  </Subject>
);
```

Bu örnekte, `Subject` bileşeni bir durumu yönetir ve bu durumu `SubjectContext` aracılığıyla alt bileşenleriyle paylaşır. `Observer` bileşenleri, bu context'i kullanarak durumu görüntüler. `App` bileşeni içerisindeki düğme, durumu güncelleyerek tüm observer'ların yeni durumu görmesini sağlar.

### Avantajları

- **Esneklik**: Observer'lar, sistemdeki değişikliklere kolayca tepki verebilir.
- **Yeniden Kullanılabilirlik**: Observer ve subject mantığı, çeşitli bileşenlerde yeniden kullanılabilir.
- **Bağımsız Geliştirme**: Observer'lar ve subject arasındaki zayıf bağlantı, bağımsız geliştirme ve bakımı kolaylaştırır.

### Dezavantajları

- **Hafıza Sızıntıları**: Observer'lar düzgün şekilde temizlenmezse, hafıza sızıntılarına yol açabilir.
- **Karmaşıklık**: Büyük uygulamalarda, hangi bileşenin hangi veriyi gözlemlediğini takip etmek karmaşık hale gelebilir.

React'te, observer pattern genellikle daha gelişmiş durum yönetimi çözümleri (Redux, MobX gibi) veya custom hooklar aracılığıyla daha verimli bir şekilde uygulanır. Ancak, bu örnek basit durumlar için observer pattern'in nasıl kullanılabileceğini göstermektedir.
