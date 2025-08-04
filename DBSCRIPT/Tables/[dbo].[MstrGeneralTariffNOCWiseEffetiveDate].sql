USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[MstrGeneralTariffNOCWiseEffetiveDate]    Script Date: 02/02/2024 1:23:30 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.tables where TABLE_NAME = 'MstrGeneralTariffNOCWiseEffetiveDate' )
BEGIN
	DROP TABLE [CFS_BONDED_WAREHOUSE].[dbo].[MstrGeneralTariffNOCWiseEffetiveDate]
END
CREATE TABLE [dbo].[MstrGeneralTariffNOCWiseEffetiveDate](
	[MstrGeneralTariffNOCWiseEffetiveDateID] [int] IDENTITY(1,1) NOT NULL,
	[EffetiveDateFrom] [datetime] NULL,
	[EffectiveToDate] [datetime] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[TeriffNo] [varchar](255) NULL,
	[TeriffPrefix] [varchar](255) NULL,
	[ORGID] [int] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[MstrGeneralTariffNOCWiseEffetiveDate] ADD  CONSTRAINT [DF_MstrGeneralTariffNOCWiseEffetiveDate_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[MstrGeneralTariffNOCWiseEffetiveDate] ADD  CONSTRAINT [DF_MstrGeneralTariffNOCWiseEffetiveDate_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


