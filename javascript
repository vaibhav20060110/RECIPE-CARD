const recipes = [
    // --- PIZZA (10 Items) ---
    // { id: 1, title: "Margherita Pizza", category: "Pizza", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWOkeCCgMKCQygnqFhp14LyKDUHabnoh-1w&s", ing: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Fresh Basil", "Olive Oil", "Salt"], steps: ["Roll the dough into a circle", "Spread tomato sauce evenly", "Top with cheese and basil", "Bake at 450°F for 12 mins"], yt: "https://youtu.be/vcfNpDtVqOw?si=DFuHZrICNZAuznQj" },
    // { id: 2, title: "Farmhouse Pizza", category: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400", ing: ["Capsicum", "Onion", "Mushroom", "Corn", "Cheese"], steps: ["Prep veggies", "Add sauce and toppings", "Bake until golden"], yt: "https://youtu.be/cw9Hmol-N9s?si=Z9mVupxnFlorf8D8" },
    // // Add 8 more Pizza objects here...
    // --- PIZZA CATEGORY (10 ITEMS) ---
    { 
        id: 1, 
        title: "Classic Margherita", 
        category: "Pizza", 
        img:"images/pizza2.jpg", 
        ing: ["Fresh Mozzarella", "San Marzano Tomatoes", "Basil Leaves", "Extra Virgin Olive Oil"], 
        steps: ["Roll dough thin", "Spread tomato crush", "Place mozzarella chunks", "Bake at max heat", "Add fresh basil"], 
        yt: "https://youtu.be/vcfNpDtVqOw?si=DFuHZrICNZAuznQj" 
    },
    { 
        id: 2, 
        title: "Farmhouse Pizza", 
        category: "Pizza", 
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400", 
        ing: ["Capsicum", "Onion", "Mushroom", "Corn", "Cheese"], 
        steps: ["Prep veggies", "Add sauce and toppings", "Bake until golden"], 
        yt: "https://youtu.be/cw9Hmol-N9s?si=Z9mVupxnFlorf8D8" 
    },
    { 
        id: 3, 
        title: "Double Cheese Margherita", 
        category: "Pizza", 
        img: "images/dcm.jpg", 
        ing: ["Liquid Cheese", "Mozzarella", "Cheddar", "Oregano", "Chilli Flakes"], 
        steps: ["Layer liquid cheese on base", "Add mozzarella", "Bake until bubbly", "Season with oregano"], 
        yt: "https://youtu.be/vafnnbFih3w?si=cOAgDdcmHqfYAKIY" 
    },
    { 
        id: 4, 
        title: "Paneer Makhani Pizza", 
        category: "Pizza", 
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400", 
        ing: ["Paneer Cubes", "Makhani Sauce", "Capsicum", "Red Paprika", "Mozzarella"], 
        steps: ["Substitute tomato sauce with Makhani sauce", "Top with paneer and veg", "Bake and serve hot"], 
        yt: "https://youtu.be/ByGj2sQs79g?si=YRHMNTAkuD8CjTnC" 
    },
    { 
        id: 5, 
        title: "Mexican Green Wave", 
        category: "Pizza", 
        img: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=400", 
        ing: ["Crunchy Onion", "Capsicum", "Tomato", "Jalapeno", "Mexican Herbs"], 
        steps: ["Place all green veggies", "Add heavy jalapenos for spice", "Dust with Mexican seasoning", "Bake"], 
        yt: "https://youtu.be/Yq4CPjq9FBk?si=phpKJkKAMDxiOVe5" 
    },
    { 
        id: 6, 
        title: "Veggie Paradise", 
        category: "Pizza", 
        img: "images/pizza3.jpg", 
        ing: ["Gold Corn", "Black Olives", "Capsicum", "Red Paprika", "Extra Cheese"], 
        steps: ["Layer colorful veggies", "Add a thick layer of mozzarella", "Bake until the crust is brown"], 
        yt: "https://youtu.be/CcAcgJl5-II?si=L1h8ZIZNUf-DLZ2S" 
    },
    { 
        id: 7, 
        title: "Spicy Triple Tango", 
        category: "Pizza", 
        img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400", 
        ing: ["Red Paprika", "Jalapeno", "Gherkins", "Spicy Pepper", "Cheese"], 
        steps: ["Spread spicy sauce", "Load with all three peppers", "Bake for a fiery taste"], 
        yt: "https://youtu.be/2Qnt9S18Qso?si=XLs8h6oBz-GmQOCm" 
    },
    { 
        id: 8, 
        title: "Corn n Cheese Pizza", 
        category: "Pizza", 
        img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400", 
        ing: ["Sweet Corn", "Extra Mozzarella", "Garlic Butter", "Mixed Herbs"], 
        steps: ["Apply garlic butter to edges", "Fill center with corn and cheese", "Bake until corn is roasted"], 
        yt: "https://youtu.be/uSxWoPM0mb4?si=R2YHfIpWVF4q35Ki" 
    },
    { 
        id: 9, 
        title: "Tandoori Paneer Pizza", 
        category: "Pizza", 
        img: "images/pizza4.jpg", 
        ing: ["Tandoori Paneer", "Onion", "Green Capsicum", "Mint Mayo", "Tandoori Sauce"], 
        steps: ["Use Tandoori base sauce", "Add marinated paneer", "Bake", "Drizzle mint mayo after baking"], 
        yt: "https://youtu.be/gzi0AFtp6PY?si=4Jx7knPaXts_6zv6" 
    },
    { 
        id: 10, 
        title: "Indi Tandoori Paneer", 
        category: "Pizza", 
        img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400", 
        ing: ["Paneer", "Capsicum", "Red Onion", "Spicy Tandoori Seasoning", "Cheese"], 
        steps: ["Layer spicy seasoning on cheese", "Add veggies and paneer", "Bake until the crust is smoky"], 
        yt: "https://youtu.be/TH_EM2-eDY0?si=Ri-2xiGNGdc913zv" 
    },

    // --- BURGERS (10 Items) ---
    // { id: 11, title: "Aloo Tikki Burger", category: "Burger", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400", ing: ["Burger Bun", "Potato Patty", "Lettuce", "Tomato Slice", "Mayo"], steps: ["Toast the buns", "Deep fry the potato patty", "Assemble with sauce and veg"], yt: "https://youtu.be/L6yX6OAK_V0" },
    // { id: 12, title: "Crispy Paneer Burger", category: "Burger", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400", ing: ["Paneer Block", "Breadcrumbs", "Spicy Mayo", "Bun"], steps: ["Coat paneer in batter", "Fry until crispy", "Stack in bun"], yt: "https://youtu.be/u_Yv_h1f5pM" },
    // Add 8 more Burger objects here...
    // --- BURGER CATEGORY (10 ITEMS) ---
    { 
        id: 11, 
        title: "Aloo Tikki Burger", 
        category: "Burger", 
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400", 
        ing: ["Potato Patty", "Burger Bun", "Spicy Mayo", "Onion Rings", "Tomato"], 
        steps: ["Deep fry the aloo tikki", "Toast buns with butter", "Apply mayo on both sides", "Assemble with veggies"], 
        yt: "https://youtu.be/YFwyoztoi88?si=30EcWm_Bt_J6kO6z" 
    },
    { 
        id: 12, 
        title: "Crispy Paneer Burger", 
        category: "Burger", 
        img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400", 
        ing: ["Paneer Slab", "Cornflour Batter", "Breadcrumbs", "Lettuce", "Cheese Slice"], 
        steps: ["Dip paneer in batter", "Coat with breadcrumbs", "Fry until golden", "Stack with cheese and lettuce"], 
        yt: "https://youtu.be/kUdIhifyJYg?si=dA-A-k5l3dWJOHKZ" 
    },
    { 
        id: 13, 
        title: "Cheese Lava Burger", 
        category: "Burger", 
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400", 
        ing: ["Veg Patty", "Liquid Cheese", "Jalapenos", "Cheddar Slice", "Bun"], 
        steps: ["Grill the patty", "Inject or layer extra liquid cheese", "Add jalapenos for crunch", "Serve while cheese is melting"], 
        yt: "https://youtu.be/j8Oprum2aBk?si=nQba9pqQ_NCdJGVD" 
    },
    { 
        id: 14, 
        title: "Maharaja Veg Mac", 
        category: "Burger", 
        img: "images/burger 2.jpg", 
        ing: ["Double Corn Patty", "Triple Bun", "Special Sauce", "Lettuce", "Extra Onion"], 
        steps: ["Use a middle bun layer", "Place two patties", "Drizzle signature sauce", "Assemble into a tall tower"], 
        yt: "https://youtu.be/_waktSAzubw?si=Lw82TXCf6Hk73VZN" 
    },
    { 
        id: 15, 
        title: "Mushroom Swiss Burger", 
        category: "Burger", 
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400", 
        ing: ["Sautéed Mushrooms", "Swiss Cheese", "Veg Patty", "Garlic Aioli"], 
        steps: ["Sauté mushrooms with salt and pepper", "Melt Swiss cheese over patty", "Spread aioli on bun", "Combine"], 
        yt: "https://youtu.be/fgIRny6WRAo?si=FlmcnB4X0baujygK" 
    },
    { 
        id: 16, 
        title: "Spicy Mexican burger", 
        category: "Burger", 
        img: "images/smb.jpg", 
        ing: ["Spicy Bean Patty", "Salsa", "Avocado/Guacamole", "Nachos", "Bun"], 
        steps: ["Cook bean patty", "Add salsa and guac", "Crush few nachos inside for crunch", "Toast buns"], 
        yt: "" 
    },
    { 
        id: 17, 
        title: "BBQ Smokehouse Burger", 
        category: "Burger", 
        img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=400", 
        ing: ["Grilled Patty", "BBQ Sauce", "Caramelized Onions", "Pickles"], 
        steps: ["Grill patty with BBQ glaze", "Slow cook onions until brown", "Add pickles", "Assemble in brioche bun"], 
        yt: "https://youtu.be/kKBGZsE45sE?si=1xmW67q-NMMPbNlh" 
    },
    { 
        id: 18, 
        title: "Peri Peri Zinger", 
        category: "Burger", 
        img: "images/ppz.png", 
        ing: ["Extra Crispy Patty", "Peri Peri Seasoning", "Red Chilli Sauce", "Bun"], 
        steps: ["Toss patty in peri peri powder", "Add spicy sauce to bun", "Keep veggies minimal to focus on heat"], 
        yt: "https://youtu.be/BVD22CzVoK8?si=vFbj1T7DAL8L9Lst" 
    },
    { 
        id: 19, 
        title: "Garden Fresh Burger", 
        category: "Burger", 
        img: "images/gfb.png", 
        ing: ["Mixed Veg Patty", "Cucumber", "Spinach Leaves", "Pesto Sauce"], 
        steps: ["Grill vegetable-heavy patty", "Layer fresh spinach and cucumber", "Use pesto instead of mayo"], 
        yt: "https://youtu.be/vwO2FluUYt8?si=IkkULTR0U_3Ngly6" 
    },
    { 
        id: 20, 
        title: "American Cheese Burger", 
        category: "Burger", 
        img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400", 
        ing: ["Classic Patty", "Mustard", "Ketchup", "Yellow American Cheese", "Pickles"], 
        steps: ["Grill patty", "Add double cheese", "Classic mustard/ketchup combo", "Add pickles and onions"], 
        yt: "https://youtu.be/H3R1y1ADCZw?si=abw6RV8x49mBq-tk" 
    },

    // --- PANEER (10 Items) ---
    // { id: 51, title: "Paneer Butter Masala", category: "Paneer", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", ing: ["Paneer", "Butter", "Tomato Puree", "Cream", "Garam Masala"], steps: ["Sauté spices in butter", "Add tomato puree and cook", "Add paneer and finish with cream"], yt: "https://youtu.be/k_vF9Yv1vls" },
    // { id: 52, title: "Matar Paneer", category: "Paneer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9hU8O--jAM__vrDKFafNYYzmvj02Wkf4rA&s", ing: ["Peas", "Paneer", "Onion Paste", "Spices"], steps: ["Cook onion-tomato base", "Add peas and paneer", "Simmer"], yt: "https://youtu.be/XvK_6K94lT8" },
    // Add 8 more Paneer objects here...
    // --- PASTA CATEGORY (10 ITEMS) ---
    { 
        id: 21, 
        title: "White Sauce Penne", 
        category: "Pasta", 
        img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400", 
        ing: ["Penne Pasta", "Butter", "All-purpose Flour", "Milk", "Cheese", "Garlic"], 
        steps: ["Boil pasta al dente", "Prepare white roux with butter and flour", "Slowly whisk in milk", "Add cheese and toss pasta"], 
        yt: "https://youtu.be/UxQJuCIWSQg?si=O4ycTdSMlzAOZzJN" 
    },
    { 
        id: 22, 
        title: "Arrabbiata (Red Sauce)", 
        category: "Pasta", 
        img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400", 
        ing: ["Penne", "Tomato Puree", "Garlic", "Dried Red Chillies", "Olive Oil", "Basil"], 
        steps: ["Sauté garlic and chillies in oil", "Add tomato puree and cook until thick", "Season with salt and herbs", "Mix in boiled pasta"], 
        yt: "https://youtu.be/TFMQicdri90?si=FpoXu8_HloNM38zF" 
    },
    { 
        id: 23, 
        title: "Creamy Pink Sauce Pasta", 
        category: "Pasta", 
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400", 
        ing: ["Fusilli Pasta", "Red Sauce", "White Sauce", "Mixed Veggies", "Cheese"], 
        steps: ["Prepare both red and white sauces", "Mix them in 1:1 ratio", "Sauté veggies and add to sauce", "Toss pasta and garnish with parsley"], 
        yt: "https://youtu.be/bw5JGBx7Nww?si=n2Oepjv_ynzkd8re" 
    },
    { 
        id: 24, 
        title: "Spaghetti Aglio e Olio", 
        category: "Pasta", 
        img: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400", 
        ing: ["Spaghetti", "Sliced Garlic", "Olive Oil", "Red Chilli Flakes", "Parsley"], 
        steps: ["Boil spaghetti in salted water", "Infuse olive oil with garlic and flakes", "Toss spaghetti with the garlic oil", "Add pasta water for emulsification"], 
        yt: "" 
    },
    { 
        id: 25, 
        title: "Basil Pesto Pasta", 
        category: "Pasta", 
        img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400", 
        ing: ["Fusilli", "Fresh Basil", "Pine Nuts/Walnuts", "Parmesan", "Olive Oil"], 
        steps: ["Blend basil, nuts, cheese, and oil into pesto", "Boil pasta", "Mix pesto with pasta off the heat", "Top with extra parmesan"], 
        yt: "https://youtu.be/rJodtPQMyag?si=kgEcXTJ2Xlfy8EYa" 
    },
    { 
        id: 26, 
        title: "Macaroni and Cheese", 
        category: "Pasta", 
        img: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400", 
        ing: ["Elbow Macaroni", "Cheddar Cheese", "Milk", "Butter", "Breadcrumbs"], 
        steps: ["Make a thick cheese sauce", "Stir in boiled macaroni", "Transfer to a dish and top with crumbs", "Bake until top is crispy"], 
        yt: "https://youtu.be/g84NbZs5ayU?si=biMSbOchKd_nmRag" 
    },
    { 
        id: 27, 
        title: "Spicy Peri Peri Pasta", 
        category: "Pasta", 
        img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400", 
        ing: ["Penne", "Peri Peri Seasoning", "Cream", "Capsicum", "Onion"], 
        steps: ["Sauté veggies on high heat", "Add cream and heavy peri peri spice", "Toss pasta and cook for 2 mins", "Garnish with spring onions"], 
        yt: "https://youtu.be/7h85kgW2Cnc?si=dyXLlUAL88ZpvRUd" 
    },
    { 
        id: 28, 
        title: "Mushroom Fettuccine", 
        category: "Pasta", 
        img: "images/pasta1.jpg", 
        ing: ["Fettuccine", "Button Mushrooms", "Thyme", "Heavy Cream", "Black Pepper"], 
        steps: ["Sauté mushrooms until brown", "Add thyme and cream", "Simmer until sauce thickens", "Coat long pasta ribbons in sauce"], 
        yt: "https://youtu.be/47jY5f3mkxc?si=xjP9zZjoNlijvrlW" 
    },
    { 
        id: 29, 
        title: "Lasagna (Veggie Layers)", 
        category: "Pasta", 
        img: "images/pizza5.jpg", 
        ing: ["Lasagna Sheets", "Tomato Sauce", "Spinach", "Ricotta", "Mozzarella"], 
        steps: ["Layer sheets with sauce and spinach", "Add ricotta and mozzarella between layers", "Repeat for 3 layers", "Bake for 30 mins"], 
        yt: "https://youtu.be/nVY6Ze5VYsk?si=GbZmQtEuDwDJdVz2" 
    },
    { 
        id: 30, 
        title: "Stuffed Ravioli", 
        category: "Pasta", 
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400", 
        ing: ["Ravioli", "Butter", "Sage Leaves", "Garlic", "Lemon Zest"], 
        steps: ["Boil stuffed ravioli", "Brown butter in a pan with sage", "Add garlic and lemon zest", "Toss ravioli in sage butter sauce"], 
        yt: "https://youtu.be/a6rUIFWFAMw?si=Kh6l04onoHoQR9Qj" 
    },

    // --- CHINESE (10 Items) ---
    // { id: 86, title: "Veg Manchurian", category: "Chinese", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVlke3EATRDrQejGUIsymsPjQrlWRphVm5A&s", ing: ["Cabbage", "Carrot", "Soy Sauce", "Ginger-Garlic"], steps: ["Make veggie balls", "Deep fry", "Toss in spicy gravy"], yt: "https://youtu.be/0-X77H_Uf_w" },
    // { id: 87, title: "Chilli Paneer", category: "Chinese", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400", ing: ["Paneer", "Capsicum", "Green Chilli", "Vinegar"], steps: ["Fry paneer cubes", "Sauté veggies on high flame", "Add sauces"], yt: "https://youtu.be/joweUxPyHxs" }
    // // Add 8 more Chinese objects here...
    // --- CHINESE CATEGORY (10 ITEMS) ---
    { 
        id: 31, 
        title: "Veg Manchurian Dry", 
        category: "Chinese", 
        img: "images/manchurian.jpg", 
        ing: ["Cabbage", "Carrot", "Spring Onion", "Soy Sauce", "Ginger-Garlic", "Cornflour"], 
        steps: ["Grate veggies and make balls", "Deep fry until golden brown", "Sauté garlic, ginger, and chillies", "Toss balls in soy and chili sauce"], 
        yt: "https://youtu.be/Ikg_8xquqiw?si=URLS-nyKa6MSHEAB" 
    },
    { 
        id: 32, 
        title: "Hakka Noodles", 
        category: "Chinese", 
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400", 
        ing: ["Noodles", "Capsicum", "Onion", "Vinegar", "Soy Sauce", "Green Chillies"], 
        steps: ["Boil noodles al dente", "Stir-fry thin sliced veggies on high flame", "Add sauces and noodles", "Toss quickly to maintain crunch"], 
        yt: "https://youtu.be/k09jiqUOqcg?si=34EdLqWL2NjjA5xQ" 
    },
    { 
        id: 33, 
        title: "Schezwan Fried Rice", 
        category: "Chinese", 
        img: "images/friedrice.jpg", 
        ing: ["Boiled Rice", "Schezwan Sauce", "Carrot", "Beans", "Garlic", "Celery"], 
        steps: ["Sauté garlic and celery in oil", "Add chopped veggies and Schezwan sauce", "Add cold rice and mix well", "Garnish with spring onion"], 
        yt: "https://youtu.be/LCXMs1nRY8A?si=dVbH3oDHgnqr-ad6" 
    },
    { 
        id: 34, 
        title: "Chilli Paneer Gravy", 
        category: "Chinese", 
        img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400", 
        ing: ["Paneer Cubes", "Capsicum", "Soy Sauce", "Cornflour Slurry", "Green Chillies"], 
        steps: ["Coat paneer in cornflour and fry", "Make a sauce with soy and chilli paste", "Add slurry to thicken", "Add paneer and simmer"], 
        yt: "https://youtu.be/GcVttLiuAXg?si=98VNhqeLThEvOCrT" 
    },
    { 
        id: 35, 
        title: "Honey Chilli Potato", 
        category: "Chinese", 
        img: "images/cinese.jpeg", 
        ing: ["Potato Fingers", "Honey", "Sesame Seeds", "Chilli Flakes", "Red Chilli Sauce"], 
        steps: ["Double fry potato sticks", "Sauté garlic and sauces", "Add honey for glaze", "Toss potatoes and top with sesame"], 
        yt: "https://youtu.be/fWpe1hiMSlI?si=_l7Q1K5YmJJDArlK" 
    },
    { 
        id: 36, 
        title: "Spring Rolls", 
        category: "Chinese", 
        img: "images/spring roll.jpg", 
        ing: ["Roll Sheets", "Cabbage", "Noodles", "Soy Sauce", "Flour Paste"], 
        steps: ["Sauté veggie and noodle filling", "Place on sheet and roll tightly", "Seal with flour paste", "Deep fry until crispy"], 
        yt: "https://youtu.be/fWpe1hiMSlI?si=elYAcqIRoGf0M8Jl" 
    },
    { 
        id: 37, 
        title: "Veg Momos", 
        category: "Chinese", 
        img: "images/momos.jpg", 
        ing: ["Maida Dough", "Cabbage", "Onion", "Garlic", "Black Pepper"], 
        steps: ["Roll dough into thin discs", "Fill with seasoned veggie mix", "Pleat and close", "Steam for 10-12 mins"], 
        yt: "https://youtu.be/CnER5dRGr0c?si=O9uuxkL1CrhGTuR8" 
    },
    { 
        id: 38, 
        title: "American Chopsuey", 
        category: "Chinese", 
        img: "images/american.jpeg", 
        ing: ["Crispy Fried Noodles", "Tomato Ketchup", "Cornflour", "Mixed Veggies"], 
        steps: ["Deep fry boiled noodles until stiff", "Prepare a sweet and sour veggie gravy", "Pour gravy over noodles just before serving"], 
        yt: "https://youtu.be/3lL8Szf0ytc?si=xG6YKpC1HqHycCS5" 
    },
    { 
        id: 39, 
        title: "paneer momos", 
        category: "Chinese", 
        img: "images/rolls.jpeg", 
        ing: ["Long Grain Rice", "Beans", "Carrot", "White Pepper", "Vinegar"], 
        steps: ["Sauté veggies on a hot wok", "Add pre-cooked cold rice", "Add pepper, vinegar, and salt", "Mix on high heat for 2 mins"], 
        yt: "https://youtu.be/hoZccEa0Pqo?si=SJOy02A3ufDBZC8I" 
    },
    { 
        id: 40, 
        title: "Crispy Corn", 
        category: "Chinese", 
        img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400", 
        ing: ["Sweet Corn", "Cornflour", "Black Pepper", "Onion", "Lemon"], 
        steps: ["Coat corn in flour and fry until crispy", "Toss with chopped onion and pepper", "Squeeze lemon juice", "Serve hot"], 
        yt: "https://youtu.be/RfgFPlJ6uN0?si=Oi1wkuVsmxzrw8b-" 
    },

    // --- BEVERAGES CATEGORY (10 ITEMS) ---
    { 
        id: 41, 
        title: "Masala Chai", 
        category: "Beverages", 
        img: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=400", 
        ing: ["Milk", "Tea Leaves", "Ginger", "Cardamom", "Sugar"], 
        steps: ["Boil water with crushed ginger and cardamom", "Add tea leaves and simmer for 2 mins", "Add milk and bring to a boil twice", "Strain and serve hot"], 
        yt: "https://youtu.be/2KI-PGM7PYQ?si=kqz661rW0WeKDUVv" 
    },
    { 
        id: 42, 
        title: "Cold Coffee", 
        category: "Beverages", 
         img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400", 
        
        ing: ["Instant Coffee", "Cold Milk", "Sugar", "Ice Cubes", "Chocolate Syrup"], 
        steps: ["Blend coffee, sugar, and a splash of water until frothy", "Add chilled milk and ice cubes", "Blend again until thick and foamy", "Drizzle syrup in glass and pour"], 
        yt: "https://youtu.be/J_YVRNVwhiU?si=-YtRAQCZ-P46UmjE" 
    },
    { 
        id: 43, 
        title: "Virgin Mojito", 
        category: "Beverages", 
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400", 
        ing: ["Fresh Mint", "Lemon Wedges", "Sugar", "Soda/Sprite", "Crushed Ice"], 
        steps: ["Muddle mint leaves and lemon wedges in a glass", "Add sugar and fill with crushed ice", "Top with chilled soda or Sprite", "Stir gently and garnish with mint"], 
        yt: "" 
    },
    { 
        id: 44, 
        title: "Mango Lassi", 
        category: "Beverages", 
        img: "images/yellowLassi.jpg", 
        ing: ["Mango Pulp", "Fresh Yogurt", "Sugar", "Cardamom Powder", "Ice"], 
        steps: ["Add mango pulp and yogurt to a blender", "Add sugar and a pinch of cardamom", "Blend until smooth and creamy", "Serve chilled in a tall glass"], 
        yt: "https://youtu.be/pByZ9WBCCHc?si=piFXeMuBOnr1wnjM" 
    },
    { 
        id: 45, 
        title: "Iced Tea", 
        category: "Beverages", 
        img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400", 
        ing: ["Tea Bag", "Lemon Juice", "Honey", "Fresh Mint", "Ice Cubes"], 
        steps: ["Brew a strong tea and let it cool completely", "Add lemon juice and honey to the tea", "Fill a glass with plenty of ice", "Pour tea over ice and add mint leaves"], 
        yt: "https://youtu.be/qkzu62cQwCU?si=_BzhtDDmsDmaO6u3" 
    },
    { 
        id: 46, 
        title: "Hot Chocolate", 
        category: "Beverages", 
        img: "images/chocolate.jpg", 
        ing: ["Milk", "Cocoa Powder", "Dark Chocolate", "Sugar", "Vanilla Extract"], 
        steps: ["Whisk milk, cocoa, and sugar in a small pot", "Heat until simmering, then add dark chocolate pieces", "Stir until chocolate is completely melted", "Add vanilla and serve with marshmallows"], 
        yt: "https://youtu.be/kzBOTkQRp0A?si=aSHcwksk0lE0aEOd" 
    },
    { 
        id: 47, 
        title: "Strawberry Smoothie", 
        category: "Beverages", 
        img: "images/strawberry.jpg", 
        ing: ["Fresh Strawberries", "Milk or Yogurt", "Honey", "Ice Cubes"], 
        steps: ["Wash and hull the strawberries", "Combine all ingredients in a blender", "Blend on high until perfectly smooth", "Pour into a glass and garnish with a berry"], 
        yt: "https://youtu.be/DZwPwj3jJsc?si=UxWgEM2VMUgM2_PR" 
    },
    { 
        id: 48, 
        title: "Lemonade", 
        category: "Beverages", 
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400", 
        ing: ["Fresh Lemon", "Chilled Water", "Sugar", "Black Salt", "Cumin Powder"], 
        steps: ["Squeeze fresh lemon juice into a pitcher", "Add sugar and black salt to water", "Stir until sugar is fully dissolved", "Add a pinch of cumin and serve with ice"], 
        yt: "https://youtu.be/COx5Bf0PsQs?si=7Q6kXK6-aarQVDVH" 
    },
    { 
        id: 49, 
        title: "Banana Shake", 
        category: "Beverages", 
        img: "images/banana.jpg", 
        ing: ["Ripe Banana", "Chilled Milk", "Honey", "Almonds or Walnuts"], 
        steps: ["Peel and slice the banana", "Blend with milk and honey until smooth", "Add crushed nuts for texture", "Pour and serve immediately"], 
        yt: "https://youtube.com/shorts/RaZWV66tMzo?si=iANZ2b4rUi-mowKm" 
    },
    { 
        id: 50, 
        title: "Sweet Lassi", 
        category: "Beverages", 
        img: "images/shake.jpg", 
        ing: ["Thick Curd", "Powdered Sugar", "Rose Water", "Crushed Ice", "Saffron"], 
        steps: ["Whisk the curd and sugar until very frothy", "Add a few drops of rose water", "Add crushed ice and whisk again", "Top with saffron strands and serve"], 
        yt: "https://youtu.be/eb2cawdAfhU?si=9ffj4QHss1XvdU_e" 
    },
    
];

const grid = document.getElementById('recipe-grid');
/* ===== BACKGROUND FUNCTION ===== */
function setBackground(category) {
    let body = document.body;

    category = category.toLowerCase(); // 🔥 FIX

    if (category === "pizza") {
        body.style.backgroundImage = "url('images/pizza.jpg')";
        body.style.backgroundRepeat = "repeat";
        body.style.backgroundSize = "250px";
    } 
    else if (category === "burger") {
        body.style.backgroundImage = "url('images/burger.jpg')";
        body.style.backgroundRepeat = "repeat";
        body.style.backgroundSize = "250px";
    } 
    else if (category === "pasta") {
        body.style.backgroundImage = "url('images/pasta.jpg')";
        body.style.backgroundRepeat = "repeat";
        body.style.backgroundSize = "250px";
    } 
    else if (category === "beverages") {
        body.style.backgroundImage = "url('images/beverages.jpg')";
        body.style.backgroundRepeat = "repeat";
        body.style.backgroundSize = "250px";
    } 
    else if (category === "chinese") {
        body.style.backgroundImage = "url('images/chinese.jpg')";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
    } 
    else {
        body.style.backgroundImage = "url('images/default.jpg')";
        body.style.backgroundRepeat = "repeat";
        body.style.backgroundSize = "250px";
    }
}


/* ===== RENDER ===== */
function renderRecipes(items) {
    grid.innerHTML = items.map(dish => `
        <div class="recipe-card">
            <div class="image-wrapper">
                <img src="${dish.img}" loading="lazy">
                <span class="category-tag">${dish.category}</span>
            </div>
            <div class="content">
                <h2>${dish.title}</h2>
                <div class="info-section">
                    <h4>🧂 Ingredients</h4>
                    <p>${dish.ing.join(", ")}</p>
                </div>
                <div class="info-section">
                    <h4>👨‍🍳 Procedure</h4>
                    <ol>${dish.steps.map(s => `<li>${s}</li>`).join('')}</ol>
                </div>
                <a href="${dish.yt}" target="_blank" class="yt-btn">▶ Watch Video Tutorial</a>
            </div>
        </div>
    `).join('');
}

function filterBy(cat) {

    // BACKGROUND
    setBackground(cat);

    // FILTER
    if (cat === 'All') renderRecipes(recipes);
    else renderRecipes(recipes.filter(r => r.category === cat));
}

/* ===== SEARCH ===== */
function searchRecipes() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    const filtered = recipes.filter(r => 
        r.title.toLowerCase().includes(query) || 
        r.category.toLowerCase().includes(query)
    );

    renderRecipes(filtered);
}

/* ===== INITIAL LOAD ===== */
setBackground("All");
renderRecipes(recipes);
// BUTTON CLICK HANDLER
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
        const category = this.getAttribute('data-category');

        filterBy(category);

        // ACTIVE BUTTON
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');
    });
});

