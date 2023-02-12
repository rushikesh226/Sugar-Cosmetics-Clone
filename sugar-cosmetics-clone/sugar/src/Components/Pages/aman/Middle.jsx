import { useEffect, useRef, useState } from "react";
import { Image, Box } from "@chakra-ui/react";
import styles from "./Middle.module.css";
import { GoPrimitiveDot } from "react-icons/go";
import { ProductCardRows } from "./ProductCardRows";
import { PictureCardRow } from "./PictureCardRow";
import { Link } from "react-router-dom";
import { SingleImageRow } from "./SingleImageRow";

export function Middle() {
    let [index, setIndex] = useState(0);
    const alt_image_src = [
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fb981a19c-9f48-49c7-ad78-be684ce48c08.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9723d8e3-9e99-459f-acfe-4ef93089e9ef.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Faf212df0-beb4-4420-a5a0-d8ee901c11b8.gif&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F347302b1-c01a-4655-8958-e264a0153250.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fd02156cc-08bb-4687-8b36-be0d2a2692bb.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F599a770c-5c56-480c-95ad-d8f1d7d9623a.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F347302b1-c01a-4655-8958-e264a0153250.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F069d0c1c-f78c-4d80-94f9-e65f3bbdda73.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F599a770c-5c56-480c-95ad-d8f1d7d9623a.jpg&w=1920&q=75",
    ];

    const products_row_1 = [
        {
            title: "Ace Of Face Foundation Stick",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_970c1c21-0fc9-4a9b-98dc-43cebdc5f554.jpg?v=1640792528",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/2_40b8d0b3-b672-41dd-8a98-e32a36421020.jpg?v=1655817968",
            price: 999,
            shades: 16,
            link: "https://in.sugarcosmetics.com/products/ace-of-face-foundation-stick",
        },
        {
            title: "Smudge Me Not Liquid Lipstick Mini Set: The Valentine's Edition",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/463817256-smnl-mini-box-shades-of-pink-wbg.jpg?v=1673971608",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/463817265-smnl-mini-box-shades-of-pink-wbg-2.jpg?v=1673971617",
            price: 799,
            shades: 3,
            link: "https://in.sugarcosmetics.com/products/smudge-me-not-liquid-lipstick-mini-set-the-valentines-edition",
        },
        {
            title: "Lip Zip Matte Topper",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/2_6436b73a-3a9b-4275-95b0-737b0a675ca1.jpg?v=1642434143",
            price: 499,
            shades: 6,
            link: "https://in.sugarcosmetics.com/products/lip-zip-matte-topper",
        },
        {
            title: "Arch Arrival Brow Pen - 01 Jerry Brown (Medium Brown)",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/Arch-Arrival-Brow-Pen-WBG-1-4_f1d9d432-b79a-48d6-aafe-973caddfe9e3.jpg?v=1637077536",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/6_9f87eb09-2853-434c-897c-e0fead2fea32.jpg?v=1657009418",
            price: 399,
            shades: 7,
            link: "https://in.sugarcosmetics.com/products/arch-arrival-brow-pen",
        },
    ];

    const hotDeals = [
        {
            image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F1eca920c-e658-41c8-8f9a-39e53d3d410d.gif&w=1920&q=75",
            title: "The best for your babe",
        },
        {
            image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5b67b78-aad4-462b-b810-ac81ac7a9796.jpg&w=1920&q=75",
            title: "Eyes and face makeup palatte",
        },
        {
            image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc0b0fe31-2d22-4a53-9ef0-6d4bbd8a0012.gif&w=1920&q=75",
            title: "Sugar x Boat - Free Gadgets ",
        },
    ];

    const productRow_vineeta_picks = [
        {
            title: "Bling Leader Illuminating Moisturizer",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-01-gold-diggin-warm-gold-with-a-pearl-finish-13644788006995.jpg?v=1619115785",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-01-gold-diggin-warm-gold-with-a-pearl-finish-14270754291795.jpg?v=1619115788",
            price: 699,
            shade: 3,
            link: "https://in.sugarcosmetics.com/products/bling-leader-illuminating-moisturizer",
        },
        {
            title: "The Most Eligiblur Correcting Primer",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_2170e342-a8fc-4fb4-a5ea-5f0c8bedbfdf.jpg?v=1652942866",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/2_1268d25b-dcf4-43f8-9fd8-ee83b33e0dc0.jpg?v=1652942866",
            price: 799,
            shade: 3,
            link: "https://in.sugarcosmetics.com/products/the-most-eligiblur-correcting-primer",
        },
        {
            title: "Ace Of Face Foundation Stick",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_970c1c21-0fc9-4a9b-98dc-43cebdc5f554.jpg?v=1640792528",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/2_40b8d0b3-b672-41dd-8a98-e32a36421020.jpg?v=1655817968",
            price: 999,
            shade: 13,
            link: "https://in.sugarcosmetics.com/products/ace-of-face-foundation-stick",
        },
        {
            title: "Dream Cover SPF15 Mattifying Compact",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-light-12775602454611.jpg?v=1619106458",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-light-14376511701075.jpg?v=1619106460",
            price: 499,
            shade: 4,
            link: "https://in.sugarcosmetics.com/products/dream-cover-spf15-mattifying-compact",
        },
    ];

    let productRow_justIn = [
        {
            title: "SUGAR Tipsy Lips Scrub + Balm Duo",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/Artboard1_afb1d932-4aaf-4f25-a299-03d6d8f75dd1.jpg?v=1675933438",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/Artboard3_ec795ad3-b65e-4eb6-bdc2-f18983522b2b.jpg?v=1675933439",
            price: 499,
            shade: 3,
            link: "https://in.sugarcosmetics.com/products/sugar-tipsy-lips-scrub-balm-duo",
        },
        {
            title: "Aquaholic Hydrating Foundation",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/3_18979dab-a710-4356-93cf-749d5eea32af.jpg?v=1675407846",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb01e08f-60d9-4eff-bf10-dbf2aa97a919.jpg?v=1675407846",
            price: 499,
            shade: 8,
            link: "https://in.sugarcosmetics.com/products/sugar-aquaholic-hydrating-foundation",
        },
        {
            title: "Mousse Muse Maskproof Lip Cream",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/3_3c1bef59-b657-480f-ba3d-032fae495918.jpg?v=1675058550",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/2_c0f35cb3-4ce9-426f-8300-2871fe70cbaf.jpg?v=1675058550",
            price: 599,
            shade: 12,
            link: "https://in.sugarcosmetics.com/products/mousse-muse-maskproof-lip-cream",
        },
        {
            title: "Auto Correct Creaseless Concealer",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/07VanillaLatte_8446a360-1edf-4e6e-8771-dba788fbc9a1.jpg?v=1673281033",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/Product-with-carton.jpg?v=1673234823",
            price: 599,
            shade: 7,
            link: "https://in.sugarcosmetics.com/products/auto-correct-creaseless-concealer",
        },
    ];

    const top_picks_of_the_week = [
        {
            image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg&w=1920&q=75",
            title: "Bling Leader Illuminating Moisturizer",
            link: "https://in.sugarcosmetics.com/products/bling-leader-illuminating-moisturizer",
        },
        {
            image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F42badecf-d09d-47c4-a0cb-145f789a3b0f.jpg&w=1920&q=75",
            title: "Mettle Liquid Lipstick",
            link: "https://in.sugarcosmetics.com/products/sugar-mettle-liquid-lipstick",
        },
        {
            image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fae700fcf-b911-452c-a916-f9994a15d20c.gif&w=1920&q=75",
            title: "Best Selling Value Sets",
            link: "https://in.sugarcosmetics.com/kit-collection/value-set",
        },
    ];

    let timer = useRef(null);

    useEffect(() => {
        // console.log(timer.current);
        if (timer.current !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            index += 1;
            if (index >= 9) {
                index = 0;
            }
            setIndex(index);
        }, 3000);
    }, [index]);

    return (
        <div
            style={{
                backgroundColor: "rgb(242,242,242)",
            }}
        >
            <div>
                <Box className={styles.sliding_images_box}>
                    <Image
                        alt="pic1"
                        src={alt_image_src[index]}
                        className={styles.sliding_images}
                    ></Image>
                </Box>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "10%",
                    margin: "auto",
                }}
            >
                <GoPrimitiveDot
                    size="20px"
                    color="teal"
                    onClick={(e) => {
                        setIndex(0);
                        console.log(e.target);
                        e.target.color = "black";
                    }}
                />
                <GoPrimitiveDot
                    size="20px"
                    color="teal"
                    onClick={(e) => {
                        setIndex(1);
                    }}
                />
                <GoPrimitiveDot
                    size="20px"
                    color="teal"
                    onClick={(e) => {
                        setIndex(2);
                    }}
                />
                <GoPrimitiveDot
                    size="20px"
                    color="teal"
                    onClick={(e) => {
                        setIndex(3);
                    }}
                />
                <GoPrimitiveDot
                    size="20px"
                    color="teal"
                    onClick={(e) => {
                        setIndex(4);
                    }}
                />
                <GoPrimitiveDot
                    size="20px"
                    color="teal"
                    onClick={(e) => {
                        setIndex(5);
                    }}
                />
                <GoPrimitiveDot
                    size="20px"
                    color="teal"
                    onClick={(e) => {
                        setIndex(6);
                    }}
                />
            </div>

            <ProductCardRows
                products={products_row_1}
                rowTitle="BESTSELLERS"
                bg="https://media.sugarcosmetics.com/upload/homePageBackGroundTexture.jpg"
            />

            <PictureCardRow arr={hotDeals} rowTitle="HOT DEALS" />

            <ProductCardRows
                products={productRow_vineeta_picks}
                rowTitle="GET VINEETA'S SHARK TANK LOOKS"
                bg={undefined}
            />

            <ProductCardRows
                products={productRow_justIn}
                rowTitle="JUST IN"
                bg="https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png"
            />

            <SingleImageRow
                imgWidth="70%"
                rowTitle="MOUSSE MUSE MASKPROOF LIP CREAM"
                imgLink="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/68dd3117-c41b-4abf-bb77-20e3b9b676d0.jpg&w=1920&q=75"
            />

            <PictureCardRow
                arr={top_picks_of_the_week}
                rowTitle="TOP PICKS OF THE DAY"
            />

            <SingleImageRow
                imgWidth="95%"
                rowTitle="REFER YOUR FRIENDS"
                imgLink="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8638d096-d168-404e-9b83-56967625b5e6.jpg&w=1920&q=75"
            />
        </div>
    );
}
