const DOMAIN_EXPERIENCE2 = "domain experience"
const BUSINESS_EXPERIENCE2 = "business experience"

interface ExperienceHolder {
    title: String,
    subFields: SubField[]
}

interface SubField {
    title?: String,
    list: any[]
}

const DOMAIN_EXPERIENCE: ExperienceHolder = {
    title: "domain experience",
    subFields: [
        {
            title: "INSURANCE",
            list: [
                "World's leading Insurtech company offering SAAS solution for insurance companies"
            ]
        },
        {
            title: "TRANSPORT",
            list: [
                "Port of Klaipeda - freight web app",
                "Government-owned railway company of Finland - railway maintenance web app"]
        },
        {
            title: "STATISTICS",
            list: [
                "The Department of Statistics of Lithuania - statistics web app"
            ]
        }
    ]
}

const BUSINESS_EXPERIENCE: ExperienceHolder = {
    title: "domain experience",
    subFields: [
        {
            list: [
                "Design and development of billing and payment specific micro services",
                "Development of complicated enterprise document flow systems",
                "Full stack development of GIS systems",
                "Work experience with client: communication, onsite presentations"
            ]
        }
    ]
}


function Experience() {
    return (
        <div>

        </div>
    )

}

export default Experience