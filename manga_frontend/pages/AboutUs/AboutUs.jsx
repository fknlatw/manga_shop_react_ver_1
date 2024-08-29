import styles from "./AboutUs.module.css";
import Catlady from "/[removal.ai]_cdb370fb-c0f2-4d1c-a328-f78c75b4f81a-leonardo_phoenix_a_vibrant_animestyle_portrait_of_a_young_woma_1.png";
import Catlady2 from "/bg-93879649-3197-4a7f-af45-8d4391c2dd31.png";
import ContactForm from '/src/components/ContactForm/ContactForm';

const AboutUs = () => {
    return <div className={styles.aboutContainer}>
            <div className={styles.banner}>
                <div className={styles.bannerImgContainer}>
                    <img className={styles.bannerImg} src={Catlady2} alt="" />
                </div>

                <h1 className={styles.bannerTitle}>MANGA SHOP</h1>
                
            </div>

            <div className={styles.aboutText}>
                <p>
                    Мы - команда энтузиастов и ценителей японской культуры, которые объединились, чтобы предоставить вам лучший выбор манги. Наша миссия - сделать доступными для каждого любителя японской культуры самые интересные и популярные произведения манги.
                </p>

                <p>
                    Мы тщательно отбираем каждую книгу, которую предлагаем нашим клиентам, чтобы гарантировать высокое качество и увлекательность чтения. У нас вы найдете как классические, так и современные работы японских авторов, которые уже завоевали сердца миллионов читателей по всему миру.
                </p>

                <p>
                    Кроме того, мы стремимся создать комфортную атмосферу для наших клиентов, предоставляя удобный интерфейс сайта, быструю доставку и отличный сервис поддержки. Мы всегда готовы помочь вам с выбором и ответить на все ваши вопросы.
                </p>

                <p>
                    Наша цель - стать вашим надежным проводником в мир японской манги, где каждый найдет что-то по своему вкусу. Присоединяйтесь к нам и погрузитесь в увлекательный мир японской культуры вместе!
                </p>
            </div>

            <ContactForm/>
    </div>
}

export default AboutUs;