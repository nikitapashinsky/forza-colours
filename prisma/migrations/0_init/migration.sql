-- CreateTable
CREATE TABLE "Forza Colours" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "make" TEXT NOT NULL,
    "colour_name" TEXT NOT NULL,
    "paint_type" TEXT NOT NULL,
    "hf_1" DECIMAL NOT NULL,
    "hf_1_pos" TEXT NOT NULL,
    "h_1" DECIMAL NOT NULL,
    "s_1" DECIMAL NOT NULL,
    "s_1_pos" TEXT NOT NULL,
    "b_1" DECIMAL NOT NULL,
    "b_1_pos" TEXT NOT NULL,
    "hf_2" DECIMAL,
    "hf_2_pos" TEXT,
    "h_2" DECIMAL,
    "s_2" DECIMAL,
    "s_2_pos" TEXT,
    "b_2" DECIMAL,
    "b_2_pos" TEXT,

    CONSTRAINT "Forza Colours_pkey" PRIMARY KEY ("id")
);

