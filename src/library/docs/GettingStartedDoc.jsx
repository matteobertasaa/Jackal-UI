export default function GettingStartedDoc() {
  return (
    <div className="flex flex-col gap-8 leading-relaxed">
      <section>
        <h3 className="mb-4 text-2xl font-bold text-sand">Come funziona</h3>
        <p className="mb-4 text-back">
          Jackal UI non è una libreria tradizionale che installi tramite npm o
          scarichi per intero. È una collezione di componenti React pensati per
          essere copiati e incollati direttamente nel tuo progetto. Funzionano
          subito e hai il controllo totale sul codice!
        </p>
      </section>

      <section className="rounded-2xl border border-earth bg-den p-8 shadow-lg">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-fur text-sm font-bold text-night">
            1
          </div>
          <h4 className="text-xl font-bold text-sand">Installa le Dipendenze</h4>
        </div>
        <p className="mb-4 text-back">
          Tutti i componenti animati usano <strong>Framer Motion</strong>. Ti 
          basta installare questo pacchetto nel tuo progetto React:
        </p>
        <pre className="overflow-x-auto rounded-lg border border-earth bg-night p-4 text-sm text-sand/80">
          <code>npm install framer-motion</code>
        </pre>
      </section>

      <section className="rounded-2xl border border-earth bg-den p-8 shadow-lg">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-fur text-sm font-bold text-night">
            2
          </div>
          <h4 className="text-xl font-bold text-sand">Configura Tailwind CSS</h4>
        </div>
        <p className="mb-4 text-back">
          Aggiungi i colori base di Jackal UI al tuo file CSS (es.{" "}
          <code className="rounded bg-earth px-1 py-0.5 text-sand">
            index.css
          </code>
          ) se usi Tailwind v4. Questi colori permetteranno ai componenti di 
          avere lo stile corretto non appena incollati.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-earth bg-night p-4 text-sm text-sand/80">
          <code>{`@import "tailwindcss";\n\n@theme {\n  --color-night: #16130F;\n  --color-den: #211C16;\n  --color-earth: #3A3228;\n  --color-back: #A39A88;\n  --color-fur: #BF8A47;\n  --color-amber: #E3B04B;\n  --color-sand: #E8D9BC;\n  --color-steel: #5C6B73;\n}`}</code>
        </pre>
      </section>

      <section className="rounded-2xl border border-earth bg-den p-8 shadow-lg">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-fur text-sm font-bold text-night">
            3
          </div>
          <h4 className="text-xl font-bold text-sand">Copia & Incolla</h4>
        </div>
        <p className="text-back">
          Finito! Dopo aver seguito la guida, puoi copiare il codice di qualsiasi 
          componente da questa libreria e funzionerà subito in ogni caso nel tuo progetto.
        </p>
      </section>
    </div>
  );
}
