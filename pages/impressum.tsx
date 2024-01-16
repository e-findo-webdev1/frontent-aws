const Impressum = () => {
    return(
        <div className="overflow-auto h-full px-48 overflow-auto h-full text-justify" id="content-page">
            <p className="my-9 text-2xl font-bold">Impressum</p>
            <div className="text-xs mt-3 max-w-xl">
                <span className="font-semibold text-sm">Verantwortlich für den Inhalt und Inhaber der Website:</span><br/>
                <br/>
                <span className="text-xs font-light">
                e-findo GmbH<br/>
                Gerwigstr. 12<br/>
                78234 Engen<br/>
                T: +49 (0) 77 33-99 68 95-0<br/>
                F: +49 (0) 77 33-99 68 95-8<br/>
                info@e-findo.de<br/>
                <br/>
                Realsierung:<br/>
                e-findo GmbH<br/>
                Gerwigstr. 12<br/>
                www.e-findo.de<br/>
                </span>
                <br/>
                <span className="font-semibold text-sm">Haftungsbeschränkung für externe Links und Urheberrecht:</span>
                <br/>
                <br/>
                <div className="font-light text-xs">
                    Unsere Webseite enthält Verknüpfungen zu anderen Webseiten. Da wir auf die Inhalte dieser Webseiten
                    keinen Einfluss haben, kann für diese fremden Inhalte keine Gewähr übernommen werden. Für die
                    rechtskonformen Inhalte und die Richtigkeit der Informationen ist immer der verantwortliche
                    Informationsanbieter der verknüpften Webseite verantwortlich. Wir haben uns zum Zeitpunkt der
                    Verknüpfung davon überzeugt, dass keine Rechtsverstöße vorhanden waren. Wird uns eine Rechtsverletzung
                    bekannt, werden wir die betroffenen Links sofort entfernen.<br/>
                    <br/>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen Urheberrecht. Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
                    einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
                    umgehend entfernen.
                </div>
            </div>
        </div>
    )
}

export default Impressum