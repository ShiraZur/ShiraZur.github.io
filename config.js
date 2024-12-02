var config = {
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    accessToken: 'pk.eyJ1Ijoic2hpcmF6dXIiLCJhIjoiY20zcnB2aXg1MDd0djJrcHpzdml2em9rOSJ9.JF1m7ea2v67W1fhQAhDNrQ',
    theme: 'light',
    title: 'Flood Risk Vulnerabilities in Seattle',
    subtitle: 'Exploring the Intersection of Environmental and Socioeconomic Vulnerability in Seattle',
    byline: 'By Shira Zur and Kevin Kemegue',
    footer: 'Sources: <br> <a href="https://cig.uw.edu/publications/effect-of-climate-change-on-flooding-in-king-county-rivers-using-new-regional-climate-model-simulations-to-quantify-changes-in-flood-risk/" target="_blank">Effect of Climate Change on Flooding in King County Rivers</a> <br> <a href="https://insights.som.yale.edu/insights/is-seattle-prepared-for-climate-change" target="_blank">Is Seattle Prepared for Climate Change?</a> <br> <a href="https://crosscut.com/environment/2022/06/climate-change-takes-toll-seattleites-mental-health" target="_blank">Climate Change Takes a Toll on Seattlelites Mental Health</a> <br> <a href="https://crosscut.com/environment/2022/03/redlinings-enduring-impact-shows-wa-pollution-disparity" target="_blank">Redlinings Enduring Impact Shows Up in WA Pollution Disparity</a>',
    chapters: [
        {
            id: 'pre-story',
            alignment: 'left',
            hidden: false,
            title: 'Introduction to Environmental Hazards in Washington',
            image: '/images/pre-story.jpg',
            description: 'Living in Seattle, or anywhere near the West Coast, means living with the inevitability of the “Big One”. This massive, ultimately catastrophic crisis-in-waiting has become almost too easy to ignore for some locals. If it wasn’t for the prescient science underpinning these concerns, and the massive fault line that underpins most of the West Coast, one living in Seattle might be inclined to dismiss the warnings as apocryphal. Seattle, along with the rest of the Northern Pacific Coast, sits on top of the Cascadia Subduction Zone. The last “Big One” was nearly 300 years ago, an 8.7-magnitude earthquake in 1700, and scientists say we’re due for another. Preparing for the “Big One” is a multifaceted process, one that requires a qualitative and quantitative approach. You don’t need to peer into predictive models to witness climate change’s impact on our city today. Based on models from a 2018 University of Washington’s Climate Impact Group study, “climate projections indicate an increase in flooding in many Pacific Northwest watersheds over the course of the 21st century, in response to an increasing proportion of mountain precipitation falling as rain instead of snow” (Lee, Mauger, and Won 2018, 1). The data from the study also indicates an increase in both the intensity and in the type of heavy rain that are the cause of river-scale flood events. Per Axios, five of Seattle’s highest days of rainfall total have occurred since 2000, alongside “eight of the ten wettest three-day stretches in Seattles recorded weather history” (Clarridge 2023).',
            legend: false,
            location: {
                center: [-120.376352, 47.410658],  
                zoom: 6, 
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'hazard-layer',
                    opacity: 0
                },
                 {
                     layer: 'vehicles-layer',
                     opacity: 0
                 },
                {
                    layer: 'hospital-layer',
                    opacity: 0
                }
            ],
        },
        {
            id: 'chapter-one',
            alignment: 'left',
            hidden: false,
            title: 'Mapping Flood Risk Zones in Seattle',
            image: '/images/chapter-one.jpg',
            description: 'This pink highlighted area showcases the areas that would be at most risk if a potential flood were to occur. You can use the search bar to look up places in Seattle and check their proximity to the flood risk zone. It can be seen that the Georgetown and Industrial District would face the most risk, as well as any area along the coast on the Puget Sound, especially along the Elliot Bay.',
            legend: false,
            location: {
                center: [-122.336117, 47.607382], 
                zoom: 10, 
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'hazard-layer',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hazard-layer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'The Relationship Between Hazard Areas and Hospital Access',
            image: '/images/chapter-two.jpg',
            description: 'This is a map of medical facilities in Seattle and surrounding areas. You can click on a hospital to see its name. Per FEMA, floods are the “leading cause of natural disaster deaths worldwide and were responsible for 6.8 million deaths in the 20th century." There are numerous health risks that can occur during and after a flood, such as: death due to drowning, physical trauma, electrocution from downed power lines or cables, and illness from respiratory and infectious diseases. All these risks are further intensified by the ancillary impacts of flooding: increased exposure to CO2, mental health challenges, dehydration, heat strokes, and prolonged lack of or limited access to medical equipment and supplies. In a city where flooding poses a greater risk than ever, proximity to medical services are vital.',
            legend: false,
            location: {
                center: [-122.336117, 47.607382],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'hazard-layer',
                    opacity: 1
                },
                {
                    layer: 'hospital-layer',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hazard-layer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-three',
            alignment: 'left',
            hidden: false,
            title: 'Households Without Vehicles',
            image: '/images/chapter-three.jpg',
            description: 'Car ownership has been on the decline in Seattle since the last decade, a movement driven by people under the age of 35 opting for bikes and public transit. To simply characterize car ownership trends in the Seattle area as factors of personal choice, however, would be dismissive of how income and car ownership are intimately connected. Car ownership becomes more common among higher income groups, but even when people of lower income have access to cars, “vehicle dependency” becomes a concern. Per Vox: “The burdens of vehicle dependency fall disproportionately on marginalized people, especially those who are low-income and those who are Black”. Lower-income and marginalized populations have a harder time obtaining car loans, paying for car insurance, and have to pay more compared to others.  Vehicle dependency and car ownership become consequential in the event of flooding since they can have a dramatic impact on health outcomes. They impact everything from evacuation procedures to access to medical care.',
            legend: true,
            location: {
                center: [-122.336117, 47.607382],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'vehicles-layer',
                    opacity: 0.7
                },
                {
                    layer: 'hospital-layer',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'chapter-four',
            alignment: 'left',
            hidden: false,
            title: "Zooming in on Seattle's Industrial District",
            image: '/images/chapter-four.jpg',
            description: "Let's zoom in on the Industrial District to take a further look into car ownership trends in the city. Per Census data collected in 2010, car ownership can further be broken down into 1-person, 2-person, 3-person, and 4-person households without a vehicle. A 4-person household without a vehicle would be at the highest health risk and would have the most limited access to a hospital if a flood were to occur. While most of the households without vehicles in this area are 1-person, there are still seventy 4-person households without a vehicle as well. This indicates that in order to successfully create prevention methods for socioeconomic environmental risks, a more in-depth approach is required in order to identify and address such vulnerabilities in each census tract in the city.",
            legend: false,
            chartdata: [
                {group: "1-Person", value: 351},
                {group: "2-Person", value: 139},
                {group: "3-Person", value: 0},
                {group: "4-Person", value: 70}
            ],
            location: {
                center: [-122.364190, 47.578536],  
                zoom: 12.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'hazard-layer',
                    opacity: 1
                },
                 {
                     layer: 'vehicles-layer',
                     opacity: 1
                 },
                {
                    layer: 'hospital-layer',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hazard-layer',
                    opacity: 0
                },
                 {
                     layer: 'vehicles-layer',
                     opacity: 0
                 },
                {
                    layer: 'hospital-layer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'conclusion',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion',
            image: '/images/conclusion.png',
            description: "To their credit, the City of Seattle and the State of Washington have implemented numerous programs that aim to tackle the climate crisis on a local level. These include increasing investments in public transportation, programs that tackle environmental inequities like the Seattle 2030 Plan, and expansions in stormwater infrastructure. And while the solutions to the climate crisis all seem relatively simple and common sense, it’s the implementation and logistics of these policies that are complex. In an interview with Yale Insights, Seattle Climate Policy Advisor Ann Grodnik-Nagle illustrated the intricacy of her work: “The City of Seattle, King County, and the Port of Seattle have overlapping jurisdictions. Everyone has their own roles and priorities, but there’s a lot of really good coordination and alignment” (O'Callahan 2021). For these types of broad, all encompassing climate policies to work and be really effective, it requires the cooperation and synergy of multiple agencies and communities on local, state, and even federal levels. Otherwise, well-meaning interventions are just that, or even consequently, can cause more harm to already disadvantaged groups.",
            legend: false,
            location: {
                center: [-120.376352, 47.410658],  
                zoom: 6, 
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    layer: 'hazard-layer',
                    opacity: 0
                },
                 {
                     layer: 'vehicles-layer',
                     opacity: 0
                 },
                {
                    layer: 'hospital-layer',
                    opacity: 0
                }
            ],
        }
    ]
};