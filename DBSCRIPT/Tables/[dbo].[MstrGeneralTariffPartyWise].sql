USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[MstrGeneralTariffPartyWise]    Script Date: 01/31/2024 3:08:46 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MstrGeneralTariffPartyWise](
	[MstrGeneralTariffPartyWiseID] [int] IDENTITY(1,1) NOT NULL,
	[TariffHeadName] [varchar](255) NULL,
	[MstrTariffHeadID] [int] NULL,
	[ContSizeID] [int] NULL,
	[CargoSize] [varchar](255) NULL,
	[MstrNatureOfCargoID] [int] NULL,
	[CargoType] [varchar](255) NULL,
	[MstrBillableCommodityID] [int] NULL,
	[BillCommodity] [varchar](255) NULL,
	[MstrSubCommodityID] [int] NULL,
	[SubCommodity] [varchar](255) NULL,
	[Rate] [decimal](10, 2) NOT NULL,
	[DeletedMstrBatchID] [int] NULL,
	[DeletedBatch] [varchar](255) NULL,
	[Discount] [decimal](10, 2) NOT NULL,
	[RatePerMetricTon] [decimal](10, 2) NOT NULL,
	[RatePerUnit] [decimal](10, 2) NOT NULL,
	[EffetiveDateFrom] [datetime] NULL,
	[EffectiveToDate] [datetime] NULL,
	[Number] [int] NULL,
	[StoragePattern] [varchar](255) NULL,
	[FromDays] [int] NULL,
	[ToDays] [int] NULL,
	[MstrUomID] [int] NULL,
	[UOM] [varchar](255) NULL,
	[RateOfArea] [decimal](10, 2) NOT NULL,
	[FromWeek] [int] NULL,
	[ToWeek] [int] NULL,
	[DeliveryMode] [varchar](255) NULL,
	[DeliveryModeID] [int] NULL,
	[MstrGeneralTariffPartyWiseEffetiveDateID] [int] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWise] ADD  DEFAULT ((0)) FOR [Rate]
GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWise] ADD  DEFAULT ((0)) FOR [Discount]
GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWise] ADD  DEFAULT ((0)) FOR [RatePerMetricTon]
GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWise] ADD  DEFAULT ((0)) FOR [RatePerUnit]
GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWise] ADD  DEFAULT ((0)) FOR [RateOfArea]
GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWise] ADD  CONSTRAINT [DF_MstrGeneralTariffPartyWise_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWise] ADD  CONSTRAINT [DF_MstrGeneralTariffPartyWise_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


