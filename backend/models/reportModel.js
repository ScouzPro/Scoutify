import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    player_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'players'
    },
    matchId: Number,
    scout_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'scout'
    },
    date: Date,
    averageScore: Number,
    averageActualMatch: Number,
    averagePreviousMatch: Number,
    totalPrincipalSkills: Number,
    totalTacticalSkills: Number,
    totalPhysicalSkills: Number,
    averageTotalSkills: Number
}
);

const Report = mongoose.model('Report', reportSchema);

export default Report;