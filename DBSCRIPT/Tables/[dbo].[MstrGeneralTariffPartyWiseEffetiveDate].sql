USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[MstrGeneralTariffPartyWiseEffetiveDate]    Script Date: 01/31/2024 3:22:14 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MstrGeneralTariffPartyWiseEffetiveDate](
	[MstrGeneralTariffPartyWiseEffetiveDateID] [int] IDENTITY(1,1) NOT NULL,
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

ALTER TABLE [dbo].[MstrGeneralTariffPartyWiseEffetiveDate] ADD  CONSTRAINT [DF_MstrGeneralTariffPartyWiseEffetiveDate_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWiseEffetiveDate] ADD  CONSTRAINT [DF_MstrGeneralTariffPartyWiseEffetiveDate_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


