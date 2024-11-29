<script lang="ts">
  /*
   * Please set the following variables to your liking!
   * You can use Fluent UI System Icons and Simple Icons for the icons!
   * Fluent UI System Icons: https://icones.js.org/collection/fluent
   * Simple Icons: https://icones.js.org/collection/simple-icons
   */
  const name = 'Bernhard Pirchner';
  const introduction =
    'Ich bin ein Schüler an der HTL Saalfelden und habe mich für den Informatik Zweig entschieden.';
  const avatar = 'images/pb.jpg'; // Please enter the absolute path (including subpaths)
  const about =
    'Hallo! Ich bin ein Schüler aus Österreich und befinde mich im Abschlussjahr an der HTL Saalfelden, im Zweig Informatik. In meiner Freizeit engagiere ich mich nicht nur für meine Klasse – ich wurde kürzlich zum Klassensprecher gewählt – sondern auch für die Landjugend, wo ich als Leiter aktiv bin. Es ist mir wichtig, Verantwortung zu übernehmen und gemeinsam mit anderen etwas zu bewegen. Zusätzlich arbeite ich samstags bei Billa+, um meine praktischen Fähigkeiten im Bereich Kundenservice zu erweitern und mehr über die Arbeitswelt zu lernen. Ich bin motiviert, ständig Neues zu lernen und meine Fähigkeiten in der Informatik weiter auszubauen, um in Zukunft in der Branche erfolgreich zu sein.';
  const place = 'Österreich';
  const timezone = 'Mitteleuropa/Wien +1:00';
  const skills = [
    { name: 'HTML', icon: 'i-simple-icons:html5' },
    { name: 'Astro', icon: 'i-simple-icons:astro' },
    { name: 'CSS', icon: 'i-simple-icons:css3' },
    { name: 'VueJS', icon: 'i-simple-icons:vuedotjs' },
    { name: 'JavaScript', icon: 'i-simple-icons:javascript' },
    { name: 'VSCode', icon: 'i-simple-icons:visualstudiocode' },
    { name: 'C', icon: 'i-simple-icons:c' },
    { name: 'C#', icon: 'i-simple-icons:csharp' },
    { name: 'Java', icon: 'i-simple-icons:intellijidea' },
    { name: 'Python', icon: 'i-simple-icons:python' },
    { name: 'PostgreSQL', icon: 'i-simple-icons:postgresql' },
    { name: 'MongoDB', icon: 'i-simple-icons:mongodb' },
    { name: 'MySQL', icon: 'i-simple-icons:mysql' },
    { name: 'Git', icon: 'i-simple-icons:git' },
    { name: 'GitHub', icon: 'i-simple-icons:github' },
    { name: 'Windows', icon: 'i-simple-icons:windows' },
    { name: 'Linux', icon: 'i-simple-icons:linux' },
    { name: 'etc...', icon: '' },
  ];
  const works = [
    {
      title: "Website der Jausenstation Höllgrub",
      description:
        'Für die Jausenstation Höllgrub wurde eine ansprechende Website mit WordPress erstellt und auf WordPress.com gehostet. Die Seite vermittelt das charmante Ambiente und informiert übersichtlich über das Angebot und die Kontaktmöglichkeiten.',
      url: 'https://hoellgrub.at/',
      linkText: 'Besuchen',
    },
    {
      title: 'Weekend Planner',
      description:
        'Das Projekt Weekend Planner entstand als eigenständig entwickeltes Konzept im Rahmen des Softwareprojekts unserer vorletzten Klasse. Ziel der Anwendung ist es, die Planung von Wochenendaktivitäten zu vereinfachen und eine intuitive Plattform für Nutzer bereitzustellen, um Termine und Freizeitgestaltung effizient zu organisieren.\nIch habe die Idee für dieses Projekt selbst entwickelt und umgesetzt, wobei im Backend das Framework VueJS verwendet wurde, um eine reaktive und moderne Benutzererfahrung zu gewährleisten. Dieses Projekt bot mir die Möglichkeit, meine Fähigkeiten in der Softwareentwicklung und der eigenständigen Projektgestaltung zu vertiefen.',
      url: 'https://github.com/BernhardPirchner/WeekendPlanner',
      linkText: 'Besuchen',
    },
    {
      title: "Diplomarbeit",
      description:
        'Im Rahmen unserer Diplomarbeit entwickeln wir, ein Team aus drei Personen, eine Softwarelösung für die Liftgesellschaft Zauchensee. Das Hauptziel des Projekts ist die Entwicklung eines Systems, das die effiziente Erstellung, Bearbeitung und Speicherung von Dienstplänen über mehrere Standorte hinweg ermöglicht.\nZusätzlich werden optionale Funktionen wie eine Alert-Funktion zur Übermittlung wichtiger Informationen, die Anzeige des aktuellen Arbeitsplatzes der Mitarbeiter sowie Informationen zu Gefahrenstoffen und Reinigungsmitteln in Betracht gezogen.\nDas Projekt befindet sich derzeit in der Entwicklungsphase. Meine Hauptverantwortung liegt in der Konzeption und Implementierung des Backends, das die zentralen Daten und Prozesse verwaltet.',
      url: 'https://github.com/DaAlfi/Diplomarbeit',
      linkText: 'Besuchen',
    },
    {
      title: "Website der historischen Bauernschützenkompanie Hüttau",
      description:
        'Aktuell arbeite ich an der Entwicklung einer Website für die historische Bauernschützenkompanie Hüttau. Das Projekt wurde auf Anfrage der Kompanie initiiert, die eine moderne Online-Plattform benötigt, um ihre Geschichte, Werte und Aktivitäten einer breiteren Öffentlichkeit zugänglich zu machen. Ziel ist es, eine ansprechende und benutzerfreundliche Website zu gestalten, die sowohl historische Inhalte als auch aktuelle Informationen präsentiert. \nDas Projekt befindet sich derzeit in der Umsetzungsphase.',
      url: '',
      linkText: '',
    },
  ];

  const experiences = [
    {
      title: 'Praktikum bei der Liebherr-Werk Bischofshofen GmbH',
      description:
        'Im Rahmen meines Praktikums bei Liebherr war ich in der IT-Abteilung tätig, wo ich umfassende Erfahrungen in verschiedenen Bereichen der IT-Infrastruktur sammeln konnte. Meine Hauptaufgabe bestand in der Neuinstallation und Konfiguration von Laptops, um sicherzustellen, dass alle Geräte den aktuellen Standards entsprachen und betriebsbereit waren. Zusätzlich unterstützte ich das IT-Team direkt vor Ort und bot technischen Support für Mitarbeiter, indem ich bei der Lösung von IT-Problemen half und einfache IT-Tickets bearbeitete. Ein weiterer Bestandteil meiner Arbeit war die Vorbereitung von Arbeitsplätzen, was sowohl die Einrichtung von Geräten als auch die Integration in das Firmennetzwerk beinhaltete. Zudem hatte ich die Gelegenheit, mein Wissen in der Programmierung von Shell-Skripten zu erweitern und praktische Anwendungen zur Automatisierung von IT-Prozessen zu entwickeln. Das Praktikum bei Liebherr ermöglichte es mir, mein technisches Know-how zu vertiefen und wertvolle Einblicke in die IT-Betriebsabläufe eines international agierenden Unternehmens zu gewinnen.',
        time: '18.7.2022 - 14.8.2022',
    },
    {
      title: '1. Praktikum bei der Atomic Austria GmbH',
      description:
        'Im Rahmen meines ersten Praktikums bei Atomic war ich in der administrativen Abteilung tätig und beschäftigte mich intensiv mit der Dokumentenorganisation und -verwaltung. Meine Hauptaufgabe bestand darin, Bescheide, Verhandlungsschriften und Stellungnahmen zu sammeln, zu strukturieren und effizient einem digitalen Archivierungssystem zuzuführen. Dabei stellte ich sicher, dass alle Dokumente korrekt zugeordnet und gescannt wurden, um eine fehlerfreie Datenbank zu gewährleisten. Zusätzlich war ich für das sorgfältige Ausdrucken und Archivieren der Dokumente verantwortlich, wobei ich sie in physische Ordner einordnete, um eine ordnungsgemäße Ablage und späteren Zugriff zu ermöglichen. Ein wichtiger Bestandteil meiner Arbeit war auch die direkte Kommunikation mit der Bezirkshauptmannschaft (BH), um fehlende Unterlagen zu beschaffen und den Dokumentationsprozess zu vervollständigen. Dieses Praktikum bot mir wertvolle Einblicke in die effiziente Verwaltung von Unternehmensdokumenten und die Nutzung moderner Archivierungstechnologien.',
      time: '10.7.2023-3.9.2023',
    },
    {
      title: '2. Praktikum bei der Atomic Austria GmbH',
      description:
        'Im Rahmen meines zweiten Praktikums bei Atomic war ich in der technischen Dokumentation und Maschinenverwaltung tätig, wobei ich maßgeblich zur Optimierung des internen Informationssystems beitrug. Meine Hauptaufgabe bestand darin, sämtliche Maschinen im Werk zu erfassen, zu dokumentieren und in ein neues System zu integrieren. Dabei fotografierte ich jede Maschine, erfasste relevante Daten und sorgte dafür, dass diese Informationen systematisch und präzise erfasst wurden. Zusätzlich war ich für die Erstellung und den Ausdruck von QR-Codes verantwortlich, die direkt an den Maschinen angebracht wurden, um eine schnelle Identifikation und den einfachen Zugriff auf die entsprechenden Dokumente zu ermöglichen. Ein weiterer Schwerpunkt lag in der Aktualisierung von Verhandlungsschriften, Bescheiden und Stellungnahmen, die ich ins System einpflegte und sicherstellte, dass alle Dokumente korrekt und zeitnah abgelegt wurden. Darüber hinaus übernahm ich die Aufgabe, verschiedene Unterlagen zur Bezirkshauptmannschaft (BH) zu bringen, um dort die notwendige Weiterverarbeitung sicherzustellen. In Ergänzung zu diesen Aufgaben unterstützte ich das Team bei weiteren Instandhaltungstätigkeiten, wodurch ich wertvolle praktische Erfahrungen im Bereich Maschinenwartung und Betriebsabläufe sammelte. Das Praktikum ermöglichte es mir, mein Verständnis für technische Prozesse und Dokumentationssysteme zu vertiefen und mein Organisationstalent in einem dynamischen Arbeitsumfeld weiterzuentwickeln.',
        time: '15.7.2024-11.8.2024',
    },
  ];
  const socials = [
    {
      name: 'Mail',
      url: 'bernhard.pirchner@htl-saalfelden.at',
      icon: 'i-simple-icons:gmail', // If the icon field is empty, a link icon will be automatically assigned.
    },
    {
      name: 'Github',
      url: 'https://github.com/BernhardPirchner',
      icon: 'i-simple-icons:github',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/berni.0_o/',
      icon: 'i-simple-icons:instagram',
    },
    {
      name: 'Snapchat',
      url: 'https://www.snapchat.com/add/berni.pirch05?share_id=LY1e9VzaOHQ&locale=de-AT',
      icon: 'i-simple-icons:snapchat',
    },
  ];
</script>

<div
  class="flex flex-col items-center justify-center w-full h-auto py-4 md:flex-row md:h-[80vh] break-words"
>
  <div class="flex flex-col items-start justify-center w-full p-2 md:w-2/3">
    <h1
      class="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-orange-6 to-red-6 dark:from-orange-4 dark:to-red-4 bg-clip-text md:text-6xl"
    >
      Hallo, mein Name ist {name}
    </h1>
    <p class="text-3xl text-gray-8 dark:text-gray-2">
      {introduction}
    </p>
  </div>
  <div
    class="w-full mt-4 overflow-hidden transition-transform transform shadow-lg md:w-1/3 rounded-3xl md:mt-0 scale-70 md:scale-100 hover:scale-90 md:hover:scale-120 rotate-5"
  >
    <img src={avatar} alt="Avatar" class="object-cover w-full h-full" />
  </div>
</div>
<section
  id="about"
  class="w-full p-4 py-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Über mich
    </h2>
    <p class="text-lg text-center text-gray-7 dark:text-gray-3">
      {about}
    </p>
    <div class="flex flex-col md:flex-row">
      <p
        class="flex items-center justify-center flex-1 mt-4 text-lg gap-x-2 text-gray-7 dark:text-gray-3"
      >
        <span class="block i-fluent:location-48-regular"></span>
        {place}
      </p>
      <p
        class="flex items-center justify-center flex-1 mt-4 text-lg gap-x-2 text-gray-7 dark:text-gray-3"
      >
        <span class="block i-fluent:clock-48-regular"></span>
        {timezone}
      </p>
    </div>
  </div>
</section>

<section
  id="skills"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Skills
    </h2>
    <ul class="grid grid-cols-2 gap-4 text-lg text-center">
      {#each skills as skill}
        <li class="flex items-center justify-center gap-x-2">
          {#if skill.icon}
            <span class={`block ${skill.icon}`} />
          {/if}
          {skill.name}
        </li>
      {/each}
    </ul>
  </div>
</section>
<section
  id="works"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Projekte
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg">
      {#each works as work}
        <br>
        <li>
          <h3 class="mb-2 text-2xl font-bold">{work.title}</h3>
          <p>{work.description}</p>
          {#if work.url}
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-pink-6 dark:text-pink-4 hover:underline"
            >
              {work.linkText}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>
<section
  id="experiences"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Erfahrungen
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg">
      <ul class="grid grid-cols-1 gap-4 text-lg">
        {#each experiences as experience}
        <br>
          <li>
            <h3 class="mb-2 text-2xl font-bold">{experience.title}</h3>
            <p>{experience.description}</p>
            <p>{experience.time}</p>
          </li>
        {/each}
      </ul>
    </ul>
  </div>
</section>
<section
  id="socials"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Kontakt
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg text-center">
      {#each socials as social}
        <li>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer me"
            class="flex items-center justify-center text-pink-6 dark:text-pink-4 hover:underline gap-x-2"
          >
          {#if social.icon != ''}
            <span class={`block ${social.icon}`} />
          {:else if social.icon == ''}
            <span class='block i-fluent:link-48-regular' />
          {/if}
            {social.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
