# Twitter Clone - Case Study

Bu projede, **Nuxt 3** ve **TypeScript** kullanarak bir Twitter benzeri uygulama geliştirdim. Kullanıcıların tweet atmasına, yorum yapmasına ve içerikleri beğenmesine olanak sağlayarak modern web teknolojileriyle kullanıcı dostu bir deneyim sunmayı hedefledim.

## 🚀 Canlı Demo

Uygulamayı canlı olarak görüntülemek için [buraya](https://twitter-case.vercel.app/) tıklayın.

## 📋 Özellikler

### 1. Tweet Gönderme
Kullanıcılar, arayüz üzerinden hızlı ve kolay bir şekilde tweet oluşturabilir. Her tweet; kullanıcı adı, içerik, avatar ve zaman damgası gibi bilgileri içerir. Yeni tweetler, anında ana sayfada görünerek dinamik bir akış sağlar.

### 2. Yorum Yapma
Kullanıcılar, diğer tweetlere yorum yaparak etkileşimde bulunabilir. Yorumlar, tweetlerin altında listelenerek kullanıcılar arasında bir iletişim ortamı oluşturur.

### 3. Beğenme
Tweetler ve yorumlar, kullanıcılar tarafından beğenilebilir. Beğenme işlemi, ilgili tweetin veya yorumun beğeni sayısını güncelleyerek görsel geri bildirim sunar.

### 4. Dil Desteği (i18n)
Çoklu dil desteği sağlamak amacıyla **Nuxt I18n** kütüphanesini kullandım. Kullanıcılar, uygulamayı istedikleri dilde görüntüleyebilir.

### 5. Stil Yönetimi (SCSS)
Uygulamanın stil tasarımını **SCSS** kullanarak geliştirdim. Bu, CSS’in daha modüler ve bakımı kolay bir şekilde yazılmasını sağlıyor.

### 6. Durum Yönetimi (State Management)
Kullanıcı arayüzündeki durum yönetimini sağlamak için **Pinia** kütüphanesini kullandım. Pinia, Vue 3 ile uyumlu, modern bir durum yönetim kütüphanesidir:
- **Tweet Store**: Tweetlerin ve yorumların yönetimini sağlıyor. Tweet ekleme, beğenme, yorum yapma gibi işlemler burada tanımlı.
- **Reaktif Yapı**: Uygulama durumu, Pinia ile reaktif bir şekilde güncelleniyor ve kullanıcı arayüzü anlık olarak güncellemeleri yansıtıyor.

## 🛠️ Kullanılan Teknolojiler

- **Nuxt 3** - Vue.js tabanlı modern bir framework.
- **TypeScript** - JavaScript üzerinde statik tip kontrolü sağlar.
- **Pinia** - Vue 3 uyumlu, modern bir durum yönetim kütüphanesi.
- **SCSS** - CSS’in daha gelişmiş bir ön işlemcisi.
- **Vue I18n** - Çoklu dil desteği sağlar.


## 🚀 Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edin.

### 1. Depoyu Klonlayın
İlk olarak projeyi GitHub’dan klonlayın. Terminal veya komut istemcisini açın ve aşağıdaki komutu girin:

```bash
git clone https://github.com/kullanici_adi/twitter-clone.git
```

### 2. Proje Dizinine Geçiş
Klonlama işlemi tamamlandıktan sonra, projenin dizinine geçmeniz gerekiyor. Aşağıdaki komutu kullanarak proje dizinine geçin:

```bash
cd twitter-clone
```

### 3. Bağımlılıkları Yükleme
Proje dizinine girdikten sonra, gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın. Bu işlem, projede ihtiyaç duyulan tüm paketleri ve kütüphaneleri otomatik olarak yükleyecektir:

```bash
npm install
```

### 4. Geliştirme Sunucusunu Başlatma
Bağımlılıklar yüklendikten sonra, uygulamayı geliştirme modunda başlatmak için aşağıdaki komutu çalıştırın:

```bash
npm run dev
```

Bu komut, geliştirme sunucusunu başlatacak ve uygulamayı yerel ortamda görüntüleyebilmeniz için gerekli bağlantı adresini sağlayacaktır. Genellikle, tarayıcınızda `http://localhost:3000` adresine giderek uygulamanızı görebilirsiniz.
