import mongoose from "mongoose";

const Schema = mongoose.Schema;

const playerMetricSchema = new Schema (
    {
        player_id:{
            type:Schema.Types.ObjectId,
            ref: "players",
            required: true,
        },

        averageTotalSkills: {type: Number},
        principalSkills:[{
            shot :Number,
            heading: Number,
            association: Number,
            rightFoot: Number,
            leftFoot: Number,
            longPasses: Number,
            dribbling: Number,
            reflexes: Number,
            crosses: Number,
            overallRating: Number,
            totalPrincipalSkills: Number,
        }],

        tacticalSkills: [{
            
            anticipation: Number,
            placement: Number,
            concentration: Number, 
            forcefulness: Number,
            overlap: Number,
            offTheBall: Number,
            positioning: Number,
            gameVision: Number,
            globalAverage: Number,
            totalTacticalSkills: Number
            }],

            physicalSkills: [{
                
                agility: Number,
                flexibility: Number,
                strength: Number,
                power: Number,
                endurance: Number,
                jumping: Number,
                speed: Number,
                globalAverage: Number,
                totalPhysicalSkills: Number,
              }],
        Created_At: { type: Date, default: Date.now }
    },
    { collection: 'playermetrics', versionKey: false }
);

playerMetricSchema.pre ( 'save', function(next)
{
    this.shot = Math.round(this.shot);
    this.heading = Math.round(this.heading);
    this.association = Math.round(this.association);
    this.rightFoot = Math.round(this.rightFoot);
    this.leftFoot = Math.round(this.leftFoot);
    this.longPasses = Math.round(this.longPasses);
    this.dribbling = Math.round(this.dribbling);
    this.reflexes = Math.round(this.reflexes);
    this.crosses = Math.round(this.crosses);
    this.overallRating = Math.round(this.overallRating);
    this.totalPrincipalSkills = Math.round(this.totalPrincipalSkills);

    this.anticipation = Math.round(this.anticipation);
    this.placement = Math.round(this.placement);
    this.concentration = Math.round(this.concentration);
    this.forcefulness = Math.round(this.forcefulness);
    this.overlap = Math.round(this.overlap);
    this.offTheBall = Math.round(this.offTheBall);
    this.positioning = Math.round(this.positioning);
    this.gameVision = Math.round(this.gameVision);
    this.globalAverage = Math.round(this.globalAverage);
    this.totalTacticalSkills = Math.round(this.totalTacticalSkills);

    this.agility = Math.round(this.agility);
    this.flexibility = Math.round(this.flexibility);
    this.strength = Math.round(this.strength);
    this.power = Math.round(this.power);
    this.endurance = Math.round(this.endurance);
    this.jumping = Math.round(this.jumping);
    this.speed = Math.round(this.speed);
    this.globalAverage = Math.round(this.globalAverage);
    this.totalPhysicalSkills = Math.round(this.totalPhysicalSkills);
    next();
});

const playerMetricModel = mongoose.model('playerMetricModel', playerMetricSchema);
export default playerMetricModel;