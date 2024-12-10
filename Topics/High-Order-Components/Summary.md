**Higher-Order Components (HOC)**, React'te bir bileşeni alıp onu yeni yeteneklerle donatıp geri döndüren bir fonksiyondur. Bir HOC, bir bileşenin yeniden kullanılabilir mantığını bir diğerine geçirme yöntemi olarak kullanılır. Bu, özellikle çok sayıda bileşenin benzer işlevselliğe ihtiyaç duyduğu durumlarda kullanışlıdır ve kod tekrarını azaltarak uygulamanın sürdürülebilirliğini artırır.

### High Order Components Kullanım Amaçları

1. **Kod Tekrarını Azaltmak**: Ortak işlevselliği birden fazla bileşene genişletmek yerine, bu işlevselliği bir HOC içinde tutarak tekrar tekrar kullanabilirsiniz.
2. **Kapsülleme ve Bileşen İzolasyonu**: HOC'lar, bileşenler arasında temiz bir soyutlama katmanı sağlayarak, bir bileşenin diğer bileşenler üzerindeki bağımlılıklarını azaltır.

3. **Condition Rendering**: Bileşenlerin belirli şartlara göre render edilmesini kontrol etmek için HOC'lar kullanılabilir.

4. **Yetkilendirme ve Erişim Kontrolü**: Özel bileşenleri yalnızca yetkili kullanıcılara göstermek için HOC kullanılabilir.

### High Order Components Nasıl Çalışır?

Bir HOC, başka bir bileşeni argüman olarak alır ve yeni bir bileşen döndürür. Bu süreç genellikle iki bileşeni "sarmalar": biri, HOC tarafından sağlanan ek işlevselliği alır ve diğeri orijinal bileşendir.

### React'te High Order Components Örneği

Aşağıda, basit bir yetkilendirme kontrolü sağlayan bir HOC örneği yer almaktadır. Bu HOC, yalnızca yetkilendirilmiş kullanıcılar için bileşeni gösterir:

```jsx
import React from "react";

// Bu fonksiyon, bir bileşeni alır ve ona ekstra özellikler ekler
function withAuthorization(Component) {
  return function AuthComponent(props) {
    const { isAuthenticated } = props;
    if (!isAuthenticated) {
      return <div>Unauthorized: You do not have access to this view.</div>;
    }
    return <Component {...props} />;
  };
}

// Basit bir düğme bileşeni
function ProfilePage(props) {
  return <div>Welcome to your profile!</div>;
}

// HOC ile sarılmış Bileşen
const AuthorizedProfile = withAuthorization(ProfilePage);

function App() {
  return (
    <div>
      <AuthorizedProfile isAuthenticated={true} />
    </div>
  );
}

export default App;
```

Bu örnekte `withAuthorization` HOC'i, `ProfilePage` bileşenine bir `isAuthenticated` prop'u ekleyerek onu yetkilendirme kontrollü bir hale getirir. Böylece `ProfilePage` bileşeninin görünümü, aldığı `isAuthenticated` prop'una göre değişir. `AuthorizedProfile` ise `ProfilePage` bileşeninin HOC ile genişletilmiş halidir.

### HOC Kullanmanın Avantajları

- **Yeniden Kullanılabilirlik**: HOC'lar, bileşen mantığını yeniden kullanılabilir bir şekilde sunar.
- **Soyutlama**: Ortak işlevselliği bileşenlerden soyutlayarak daha temiz ve yönetilebilir kod sağlar.
- **Esneklik**: Bileşenleri dinamik olarak özelleştirmek için kullanılabilir.

### Dezavantajları

- **Karmaşıklık**: HOC'lar, React ağacında ekstra katmanlar ekler ve bu da hata ayıklama sürecini karmaşıklaştırabilir.
- **Prop Masking**: HOC içinde kullanılan prop'lar, sarılan bileşen tarafından yanlışlıkla yeniden kullanılabilir veya göz ardı edilebilir.

HOC'lar, genellikle React uygulamalarında ortak bileşen mantığını yönetmek ve kod tekrarını azaltmak için etkili bir yöntemdir. Ancak, kullanımlarının dikkatli bir şekilde planlanması gerekmektedir, çünkü aşırı veya yanlış kullanımları uygulamanın karmaşıklığını artırabilir.
