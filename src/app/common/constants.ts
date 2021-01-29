export class Constants {
    public static readonly labResultsMap: Map<string, PatientLabResultsMap[]> = new Map<string, PatientLabResultsMap[]>([
        ["ckd", [
            {
                name: "eGFR",
                value: "2.16.840.1.113762.1.4.1222.179",
                type: "valueset"
            },
            {
                name: "Serum Creatinine",
                value: "2.16.840.1.113762.1.4.1222.111",
                type: "valueset"
            },
            {
                name: "UACR",
                value: "2.16.840.1.113883.3.6929.2.1002",
                type: "valueset"
            },
            {
                name: "Hemoglobin",
                value: "2.16.840.1.113762.1.4.1222.114",
                type: "valueset"
            },
            {
                name: "A1C",
                value: "2.16.840.1.113762.1.4.1222.119",
                type: "valueset"
            },
            {
                name: "Serum Potassium",
                value: "2.16.840.1.113762.1.4.1222.120",
                type: "valueset"
            },
            {
                name: "Serum phosphorus",
                value: "2.16.840.1.113762.1.4.1222.123",
                type: "valueset"
            },
            {
                name: "Calcium",
                value: "17861-6",
                type: "code"
            },
            {
                name: "Corrected Calcium",
                value: "2.16.840.1.113762.1.4.1222.122",
                type: "valueset"
            },
            {
                name: "Serum Albumin",
                value: "2.16.840.1.113762.1.4.1222.151",
                type: "valueset"
            },
            {
                name: "Transferrin Saturation",
                value: "2.16.840.1.113762.1.4.1222.118",
                type: "valueset"
            },
            {
                name: "Ferritin",
                value: "2.16.840.1.113762.1.4.1222.140",
                type: "valueset"
            },
            {
                name: "Blood Urea Nitrogen",
                value: "2.16.840.1.113762.1.4.1222.113",
                type: "valueset"
            },
            {
                name: "LDL",
                value: "13457-7",
                type: "code"
            },
            {
                name: "HDL",
                value: "2085-9",
                type: "code"
            },
            {
                name: "Triglycerides",
                value: "2.16.840.1.113762.1.4.1222.137",
                type: "valueset"
            },
            {
                name: "Total Cholesterol",
                value: "2.16.840.1.113762.1.4.1222.139",
                type: "valueset"
            },
            {
                name: "Vitamin D",
                value: "2.16.840.1.113762.1.4.1222.126",
                type: "valueset"
            },
            {
                name: "KT/V",
                value: "2.16.840.1.113762.1.4.1222.128",
                type: "valueset"
            },
            {
                name: "Intact Parathyroid Hormone",
                value: "2.16.840.1.113762.1.4.1222.129",
                type: "valueset"
            },
            {
                name: "Serum Biacarbonate",
                value: "2.16.840.1.113762.1.4.1222.130",
                type: "valueset"
            },
            {
                name: "Sodium",
                value: "2.16.840.1.113762.1.4.1222.131",
                type: "valueset"
            },
            {
                name: "Chloride",
                value: "2.16.840.1.113762.1.4.1222.132",
                type: "valueset"
            },
            {
                name: "PTH",
                value: "2.16.840.1.113762.1.4.1222.129",
                type: "valueset"
            }
        ]]
    ]);

    public static readonly vitalSignsMap: Map<string, PatientLabResultsMap[]> = new Map<string, PatientLabResultsMap[]>([
        ["ckd", [
            {
                name: "Cognitive Status",
                value: "72172-0",
                type: "question"
            },
            {
                name: "Fatigue",
                value: "77834-0",
                type: "question"
            },
            {
                name: "Functional Status",
                value: "77827-4",
                type: "question"
            },
            {
                name: "Pain Interference",
                value: "77865-4",
                type: "question"
            },
            {
                name: "Pain Severity",
                value: "38221-8",
                type: "question"
            },
            {
                name: "PHQ9",
                value: "44261-6",
                type: "question"
            }
        ]]
    ]);
}

interface PatientLabResultsMap {
    name: string;
    value: string;
    type: string;
}