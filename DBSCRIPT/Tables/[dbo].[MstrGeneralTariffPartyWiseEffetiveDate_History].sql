USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[MstrGeneralTariffPartyWiseEffetiveDate_History]    Script Date: 5/23/2024 10:39:52 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MstrGeneralTariffPartyWiseEffetiveDate_History](
	[MstrGeneralTariffPartyWiseEffetiveDate_HistoryID] [int] IDENTITY(1,1) NOT NULL,
	[MstrGeneralTariffPartyWiseEffetiveDateID] [int] NOT NULL,
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
	[ORGID] [int] NULL,
	[Caption] [varchar](25) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWiseEffetiveDate_History] ADD  CONSTRAINT [DF_MstrGeneralTariffPartyWiseEffetiveDate_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWiseEffetiveDate_History] ADD  CONSTRAINT [DF_MstrGeneralTariffPartyWiseEffetiveDate_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


