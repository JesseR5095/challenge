/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'imageViewer',
                            display: 'none',
                            type: 'group',
                            rect: ['0', '0', '900', '400', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'shadow',
                                type: 'rect',
                                rect: ['0px', '0px', '900px', '400px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 3, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'innerShadow',
                                type: 'rect',
                                rect: ['0px', '0px', '900px', '400px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["inset", 0, 0, 256, 75, "rgba(0,0,0,0.69)"]
                            },
                            {
                                id: 'imageReel',
                                type: 'rect',
                                rect: ['0px', '0px', '900px', '400px', 'auto', 'auto'],
                                overflow: 'hidden',
                                opacity: '0',
                                fill: ["rgba(0,0,0,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '400px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(9,17,30,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6016,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "background-color",
                            1925,
                            1250,
                            "easeOutQuad",
                            "${Stage}",
                            'rgba(255,255,255,1.00)',
                            'rgba(89,109,143,1)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            3175,
                            2825,
                            "easeOutQuad",
                            "${Stage}",
                            'rgba(89,109,143,1)',
                            'rgba(9,17,30,1.00)'
                        ],
                        [
                            "eid63",
                            "opacity",
                            3175,
                            1575,
                            "linear",
                            "${imageReel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            1925,
                            1250,
                            "linear",
                            "${shadow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "easeOutCirc",
                            "${imageViewer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            1500,
                            0,
                            "easeOutCirc",
                            "${imageViewer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "opacity",
                            1925,
                            1250,
                            "linear",
                            "${innerShadow}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "Image": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'imageContainer',
                            opacity: '0.097938144329897',
                            rect: ['-120px', '160px', '280px', '280px', 'auto', 'auto'],
                            overflow: 'visible',
                            transform: [[], [], [], ['0.05', '0.05']],
                            boxShadow: ['', 1, 2, 2, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '900px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid33",
                            "scaleX",
                            0,
                            1000,
                            "easeInCirc",
                            "${imageContainer}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid35",
                            "scaleX",
                            1000,
                            1000,
                            "easeOutCirc",
                            "${imageContainer}",
                            '1',
                            '0.05'
                        ],
                        [
                            "eid65",
                            "opacity",
                            0,
                            1000,
                            "easeInCirc",
                            "${imageContainer}",
                            '0.097938144329897',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            1000,
                            1000,
                            "easeOutCirc",
                            "${imageContainer}",
                            '1',
                            '0.10297197164948'
                        ],
                        [
                            "eid24",
                            "top",
                            0,
                            1000,
                            "easeInCirc",
                            "${imageContainer}",
                            '160px',
                            '70px'
                        ],
                        [
                            "eid28",
                            "top",
                            1000,
                            1000,
                            "easeOutCirc",
                            "${imageContainer}",
                            '70px',
                            '160px'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            0,
                            1000,
                            "easeInCirc",
                            "${imageContainer}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            1000,
                            1000,
                            "easeOutCirc",
                            "${imageContainer}",
                            '1',
                            '0.05'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            1000,
                            "easeInCirc",
                            "${imageContainer}",
                            '-120px',
                            '310px'
                        ],
                        [
                            "eid29",
                            "left",
                            1000,
                            1000,
                            "easeOutCirc",
                            "${imageContainer}",
                            '310px',
                            '740px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("/Image%20Viewer_edgeActions.js");
})("EDGE-146736390");
