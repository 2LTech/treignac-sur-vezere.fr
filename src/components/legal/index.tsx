'use client'

import { Layout } from 'antd'

import Footer from '@/components/assets/footer'
import Header from '@/components/assets/header'
import Content from '@/components/assets/content'

import styles from '@/components/assets/index.module.css'

const Legal = () => {
  return (
    <Layout className={styles.layout}>
      <Header />

      <Content>
        <h1>1 - Édition du site</h1>
        <p>
          En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
          pour la confiance dans l&apos;économie numérique, il est précisé aux
          utilisateurs du site internet https://treignac-sur-vezer.fr/
          l&apos;identité des différents intervenants dans le cadre de sa
          réalisation et de son suivi:
        </p>
        <p>Propriétaire du site : SCI GARNOTEL TREIGNAC </p>
        <ul>
          <li>Contact : contact@treignac-sur-vezer.fr 07 43 10 28 86</li>
          <li>Adresse : 1 AVENUE BEL AIR 19260 TREIGNAC</li>
        </ul>
        <p>
          Identification de l&apos;entreprise : SCI GARNOTEL TREIGNAC 1 (SGT1)
        </p>
        <ul>
          <li>SIREN : 994 064 467</li>
          <li>Adresse postale : 1 AVENUE BEL AIR 19260 TREIGNAC</li>
        </ul>
        <p>Directeur de la publication : 2LTech</p>
        <ul>
          <li>Contact : contact@2ltech.fr</li>
          <li>
            Hébergeur : Nordnet - 245 Boulevard de Tournai (5ème étage) - CS
            20458 - 59664 VILLENEUVE D'ASCQ CEDEX - Téléphone : 3420
          </li>
        </ul>
        <h1>2 - Propriété intellectuelle et contrefaçons.</h1>
        <p>
          La Société SCI GARNOTEL TREIGNAC 1 est propriétaire des droits de
          propriété intellectuelle et détient les droits d’usage sur tous les
          éléments accessibles sur le site internet, notamment les textes,
          images, graphismes, logos, vidéos, architecture, icônes et sons.
          <br />
          Toute reproduction, représentation, modification, publication,
          adaptation de tout ou partie des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
          préalable de la Société SCI GARNOTEL TREIGNAC 1.
          <br />
          Toute exploitation non autorisée du site ou de l’un quelconque des
          éléments qu’il contient sera considérée comme constitutive d’une
          contrefaçon et poursuivie conformément aux dispositions des articles
          L.335-2 et suivants du Code de Propriété Intellectuelle.
        </p>
        <h1>3 - Limitations de responsabilité.</h1>
        <p>
          La Société SCI GARNOTEL TREIGNAC 1 ne pourra être tenu pour
          responsable des dommages directs et indirects causés au matériel de
          l’utilisateur, lors de l’accès au site
          https://treignac-sur-vezere.fr/.
          <br />
          La Société SCI GARNOTEL TREIGNAC 1 décline toute responsabilité quant
          à l’utilisation qui pourrait être faite des informations et contenus
          présents sur https://treignac-sur-vezere.fr/.
          <br />
          La Société SCI GARNOTEL TREIGNAC 1 s’engage à sécuriser au mieux le
          site http://treignac-sur-vezere.fr/, cependant sa responsabilité ne
          pourra être mise en cause si des données indésirables sont importées
          et installées sur son site à son insu. Des espaces interactifs (espace
          contact ou commentaires) sont à la disposition des utilisateurs.
          <br />
          La Société SCI GARNOTEL TREIGNAC 1 se réserve le droit de supprimer,
          sans mise en demeure préalable, tout contenu déposé dans cet espace
          qui contreviendrait à la législation applicable en France, en
          particulier aux dispositions relatives à la protection des données.
          <br />
          Le cas échéant, la Société SCI GARNOTEL TREIGNAC 1 se réserve
          également la possibilité de mettre en cause la responsabilité civile
          et/ou pénale de l’utilisateur, notamment en cas de message à caractère
          raciste, injurieux, diffamant, ou pornographique, quel que soit le
          support utilisé (texte, photographie …).
        </p>
        <h1>4 - CNIL et gestion des données personnelles.</h1>
        <p>
          Le site https://treignac-sur-vezere.fr/ ne collecte pas de données
          personnelles.
        </p>
        <h1>5 - Liens hypertextes et cookies</h1>
        <p>
          Le site https://treignac-sur-vezere.fr/ contient des liens hypertextes
          vers d’autres sites et dégage toute responsabilité à propos de ces
          liens externes ou des liens créés par d’autres sites vers
          https://treignac-sur-vezere.fr/.
          <br />
          La navigation sur le site https://treignac-sur-vezere.fr/ est
          susceptible de provoquer l’installation de cookie(s) sur l’ordinateur
          de l’utilisateur. Un &quot;cookie&quot; est un fichier de petite
          taille qui enregistre des informations relatives à la navigation d’un
          utilisateur sur un site. Les données ainsi obtenues permettent
          d&apos;obtenir des mesures de fréquentation, par exemple.
          <br />
          Vous avez la possibilité d’accepter ou de refuser les cookies en
          modifiant les paramètres de votre navigateur.
          <br />
          Aucun cookie ne sera déposé sans votre consentement. Les cookies sont
          enregistrés pour une durée maximale de mois.
        </p>
        <h1>6 - Droit applicable et attribution de juridiction.</h1>
        <p>
          Tout litige en relation avec l’utilisation du site
          https://treignac-sur-vezere.fr/ est soumis au droit français. En
          dehors des cas où la loi ne le permet pas, il est fait attribution
          exclusive de juridiction aux tribunaux compétents de Tulle.
        </p>
      </Content>

      <Footer />
    </Layout>
  )
}

export default Legal
