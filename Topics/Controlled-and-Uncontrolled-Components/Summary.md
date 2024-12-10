**Controlled ve Uncontrolled Components**, React'te form elemanlarının durumlarının nasıl yönetildiğine dair iki farklı yaklaşımdır. Bu iki kavram, genellikle form elemanları (input, textarea, select vb.) ile ilgili olarak kullanılır ve elemanın durumunun (state) kontrol edilme şekliyle ilgilidir.

### Controlled Components

**Controlled Components** kavramı, form elemanlarının değerlerinin React state tarafından kontrol edildiği ve her değişikliğin bir event handler aracılığıyla yönetildiği bileşenleri ifade eder. Bu yaklaşımda, React bileşeninin state'i "tek kaynak doğruluğu" olarak işlev görür ve form elemanının güncel değeri her zaman bu state ile senkronize edilir.

```jsx
import React, { useState } from "react";

function ControlledComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type='text' value={value} onChange={handleChange} />;
}
```

Bu örnekte, `input` elemanının değeri React state'inde saklanır ve her `onChange` olayında güncellenir. Bu sayede, input her zaman güncel state değerini yansıtır.

### Uncontrolled Components

**Uncontrolled Components**, form elemanlarının kendi iç durumlarını (DOM'da) kendilerinin yönettiği ve gerektiğinde bu değerlerin React tarafından alındığı bileşenleri ifade eder. Bu bileşenlerde, genellikle `ref` kullanılır ve form elemanının mevcut değeri doğrudan DOM üzerinden erişilerek alınır.

```jsx
import React, { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Input Value: " + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef} />
      <button type='submit'>Submit</button>
    </form>
  );
}
```

Bu örnekte, `input` elemanı kontrolsüz (uncontrolled) bir bileşendir ve değeri doğrudan `ref` ile alınır. Form gönderildiğinde, input elemanının mevcut değeri `inputRef` aracılığıyla erişilir.

### Ne Zaman Hangisi Kullanılmalı?

- **Controlled Components**:
  - Değerin her zaman güncel ve senkronize olmasını istediğinizde,
  - Karmaşık form mantığı veya veri doğrulaması (validation) gerektiğinde,
  - Kullanıcı girişini başka state değerleriyle dinamik olarak değiştirmeniz gerektiğinde tercih edilir.
- **Uncontrolled Components**:
  - Form üzerinde çok fazla kontrol veya senkronizasyona ihtiyaç duymadığınızda,
  - Performansı en üst düzeye çıkarmak istediğinizde (örneğin, çok büyük formlarda),
  - Formun son değerini yalnızca submit anında almak yeterli olduğunda kullanılır.

Her iki yöntem de farklı ihtiyaçlara göre avantajlar sunar. Projenizin gereksinimlerine göre uygun olanı seçmek, daha temiz ve yönetilebilir kod yazmanıza yardımcı olur.
