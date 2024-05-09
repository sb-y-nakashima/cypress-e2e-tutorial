https://docs.cypress.io/
>2024/05/2時点、全角文字を含むディレクトリにプロジェクトを作成するとクラッシュします。


１．新しいパッケージを作成します。
```
yarn init -y
```

２．Cypressをインストール
```
yarn add cypress --dev
```

３．Cypressを開く
```
yarn cypress open
```

![alt text](readme/image1.png)

４．Continueをクリック
![alt text](readme/image2.png)

５．Start E2E Testing in Chrome をクリック
![alt text](readme/image3.png)

６．Create new Spec をクリック
![alt text](readme/image4.png)

７．Create spec をクリック
![alt text](readme/image5.png)

８．Okay, run the specをクリック
![alt text](readme/image6.png)

９．template specのpassesというテストケースが実行され、グリーンになっています。
![alt text](readme/image7.png)

１０．テストはcypress/e2e/spec.cy.js に記載されています。
![alt text](readme/image8.png)