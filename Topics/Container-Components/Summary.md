**Container Components** tasarım kalıbı, React ve diğer bileşen tabanlı çerçevelerde kullanılan bir yöntemdir. Bu kalıp, bileşenlerin iş mantığı veya veri yönetimi ile kullanıcı arayüzü (UI) parçalarını ayırarak daha temiz ve yönetilebilir bir kod yapısı oluşturmayı hedefler. Container bileşenleri, veri alışverişi, durum yönetimi ve yan etkiler gibi işlevleri üstlenirken, sunum bileşenleri yalnızca bu verileri görselleştirme ile ilgilenir.

### Container Components Kullanım Amaçları

1. **Veri Yönetimi**: Container bileşenleri, API çağrıları yapma, durum yönetimi kütüphaneleri ile iletişim kurma gibi veri ile ilgili işlemleri yönetir. Bu bileşenler, sunum bileşenlerine veri ve callback fonksiyonları gibi props'lar sağlar.
2. **Yeniden Kullanılabilirlik ve Modülerlik**: İş mantığı ile kullanıcı arayüzünü ayırarak, sunum bileşenlerinin farklı kontekstlerde ve farklı container bileşenleriyle yeniden kullanılmasına olanak tanır.

3. **Test Edilebilirlik**: İş mantığı barındıran container bileşenler ve UI parçaları ayrıldığında, her iki tür bileşen de izole edilmiş şekilde daha kolay test edilebilir.

### Container Components Nasıl Çalışır?

Bir container bileşeni, genellikle veri kaynaklarına bağlanır, verileri alır ve bu verileri sunum bileşenlerine props olarak geçirir. Bu sayede, sunum bileşenleri yalnızca aldıkları verileri görselleştiren ve kullanıcı etkileşimlerine yanıt veren basit ve yeniden kullanılabilir bileşenler olabilir.

### React'te Container Components Örneği

Aşağıda, bir API'den kullanıcı verisi çeken ve bu veriyi bir sunum bileşenine aktaran basit bir container bileşeni örneği verilmiştir:

```jsx
import React, { useState, useEffect } from "react";
import UserDisplay from "./UserDisplay"; // Sunum bileşeni

function UserContainer({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.example.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <UserDisplay user={user} />;
}

export default UserContainer;
```

Bu örnekte, `UserContainer` bileşeni bir API'den kullanıcı verisi çeker ve durumunu yönetir. `UserDisplay` bileşeni ise, verilen kullanıcı verisini görselleştirmekten sorumludur. Bu ayrım sayesinde, `UserDisplay` bileşeni farklı kontekstlerde ve farklı veri kaynakları ile kullanılabilir hale gelir.

### Avantajları

- **Bakım Kolaylığı**: İş mantığını ve UI'ı ayırmak, büyük uygulamaların bakımını ve güncellemelerini kolaylaştırır.
- **Esneklik**: Sunum bileşenleri, farklı container bileşenleri ile kullanılarak farklı işlevlerde tekrar tekrar kullanılabilir.
- **Odaklanmış Geliştirme**: Geliştiriciler, iş mantığına odaklanabilirken tasarımcılar veya front-end geliştiriciler UI üzerinde çalışabilir.

### Dezavantajları

- **Başlangıç Karmaşıklığı**: Uygulama başlangıcında ekstra planlama ve düzenleme gerektirir.
- **Yapı Karmaşıklığı**: Büyük uygulamalar için, doğru bileşenleri doğru şekilde organize etmek başlangıçta zorlayıcı olabilir.

Container Components, özellikle büyük ve karmaşık uygulamaların yönetilmesinde etkili bir yöntemdir. Bu tasarım kalıbı, uygulamanın farklı katmanlarının sorumluluklarını net bir şekilde ayırarak, daha temiz ve sürdürülebilir kod yazılmasını sağlar.
